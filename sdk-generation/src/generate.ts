/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
import axios from "axios";
import FormData from "form-data";
import fs, { readJSONSync } from "fs-extra";
import merge from "deepmerge";
import commandLineArgs, { OptionDefinition } from "command-line-args";
import { LangaugeConfig, MasterConfig } from "./interfaces";

const optionDefinitions: OptionDefinition[] = [
  { name: "language", alias: "l", type: String },
  { name: "spec", alias: "s", type: String, defaultOption: true },
];

const clOptions = commandLineArgs(optionDefinitions);

const targetLang = clOptions.language;
const spec = clOptions.spec || undefined;

// Grab all the configs and the spec namespaces
const masterConfig: MasterConfig = readJSONSync(
  process.env.MASTER_CONFIG || "./config/masterConfig.json"
);
const languageConfig: LangaugeConfig = readJSONSync(
  `${masterConfig.codeLangRoot}/${targetLang}/${masterConfig.codeLangConfig}`
);

// Grab all the APIMatic meta config files, merge them together with the language version
const globalMetaConfig = readJSONSync(masterConfig.apimaticMetaConfig);
const languageMetaConfig = readJSONSync(
  `${masterConfig.codeLangRoot}/${targetLang}/${languageConfig.apimaticMetaConfig}`
);
const metaConfig = merge(globalMetaConfig, languageMetaConfig);

// list of dir in ./specs, [ 'Voice', 'Messaging', 'WebRtc', ...]
const specs = fs.readdirSync(masterConfig.apiSpecRoot, "utf8");

// Make sure the commandline arg is one of the directories
if (spec && !specs.includes(spec)) {
  throw new Error(`Spec not found ${spec}, available specs ${specs.join(",")}`);
}

async function main() {
  const formData = new FormData();

  // Add all the specs to the formdata
  addOpenApiSpecs(formData);

  // add the merged APIMatic metaConfig
  formData.append("global", JSON.stringify(metaConfig), {
    contentType: "application/octet-stream",
    filename: "global.json",
  });

  // Added the language package information
  if (languageConfig.packageInformation) {
    formData.append(
      "packageInformation",
      JSON.stringify(
        readJSONSync(
          `${masterConfig.codeLangRoot}/${targetLang}/${languageConfig.packageInformation}`
        )
      ),
      {
        contentType: "application/octet-stream",
        filename: "packageInformation.json",
      }
    );
  }

  try {
    const response = await axios.post(
      `${masterConfig.generateURL}=${languageConfig.apimaticTemplateId}`,
      formData,
      {
        auth: {
          username: process.env.APIMATIC_USER || "",
          password: process.env.APIMATIC_PASS || "",
        },
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
        },
        responseType: "arraybuffer",
      }
    );

    const stream = response.data;

    // Write the zip file
    fs.writeFileSync(`./bandwidth.zip`, stream);
  } catch (e) {
    // for some reason, an uncaught error doesn't result in a
    // non zero exit code. This forces a non zero exit code to
    // end the github actions workflow
    console.log(e.message);
    process.exit(1);
  }
}

// Wraps all the props in an 'allOf' for XML
function wrapRef(oas: any) {
  const { schemas } = oas.components;

  Object.keys(schemas).forEach((schemaName) => {
    const props = schemas[schemaName].properties;

    if (!props) return;

    Object.keys(props).forEach((propName) => {
      const item = props[propName];

      if (item.$ref && item.xml) {
        item.allOf = [
          {
            $ref: item.$ref,
          },
        ];
        delete item.$ref;
      }
    });
  });

  return oas;
}

// Removes the "tags" attributes for SDK generation
function removeTags(oas: any) {
  const ignoreTags = ["MultiFactorAuth"];
  if (!ignoreTags.includes(oas.info.title)) {
    const { paths } = oas;

    Object.keys(paths).forEach((pathName) => {
      const operations = paths[pathName];

      Object.keys(operations).forEach((operationName) => {
        const operation = operations[operationName];
        if (operation.tags) {
          /* eslint-disable no-param-reassign */
          operation.tags = null;
        }
      });
    });
  }

  return oas;
}

function addOpenApiSpecs(formData: FormData) {
  if (spec === undefined) {
    for (const apiNamespace of specs) {
      const apiSpecPath = `${masterConfig.apiSpecRoot}/${apiNamespace}`;

      let apiSpec = removeTags(readJSONSync(apiSpecPath));
      if (masterConfig.wrappedRef.includes(apiNamespace)) {
        apiSpec = wrapRef(apiSpec);
      }

      const stream = JSON.stringify(apiSpec);

      formData.append("apiDescriptions", stream, {
        contentType: "application/octet-stream",
        filename: "api.json",
      });
    }
  } else {
    // Add only the one spec to the form data
    const apiSpecPath = `${masterConfig.apiSpecRoot}/${spec}`;

    let apiSpec = removeTags(readJSONSync(apiSpecPath));
    if (masterConfig.wrappedRef.includes(spec)) {
      apiSpec = wrapRef(apiSpec);
    }

    const stream = JSON.stringify(apiSpec);

    formData.append("apiDescriptions", stream, {
      contentType: "application/octet-stream",
      filename: `api.json`,
    });
  }
}

// run the main functions
main();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_extra_1 = __importStar(require("fs-extra"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const command_line_args_1 = __importDefault(require("command-line-args"));
const optionDefinitions = [
    { name: "language", alias: "l", type: String },
    { name: "spec", alias: "s", type: String, defaultOption: true },
];
const clOptions = command_line_args_1.default(optionDefinitions);
const targetLang = clOptions.language;
const spec = clOptions.spec || undefined;
// Grab all the configs and the spec namespaces
const masterConfig = fs_extra_1.readJSONSync(process.env.MASTER_CONFIG || "./config/masterConfig.json");
const languageConfig = fs_extra_1.readJSONSync(`${masterConfig.codeLangRoot}/${targetLang}/${masterConfig.codeLangConfig}`);
// Grab all the APIMatic meta config files, merge them together with the language version
const globalMetaConfig = fs_extra_1.readJSONSync(masterConfig.apimaticMetaConfig);
const languageMetaConfig = fs_extra_1.readJSONSync(`${masterConfig.codeLangRoot}/${targetLang}/${languageConfig.apimaticMetaConfig}`);
const metaConfig = deepmerge_1.default(globalMetaConfig, languageMetaConfig);
// list of dir in ./specs, [ 'Voice', 'Messaging', 'WebRtc', ...]
const specs = fs_extra_1.default.readdirSync(masterConfig.apiSpecRoot, "utf8");
// Make sure the commandline arg is one of the directories
if (spec && !specs.includes(spec)) {
    throw new Error(`Spec not found ${spec}, available specs ${specs.join(",")}`);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new form_data_1.default();
        // Add all the specs to the formdata
        addOpenApiSpecs(formData);
        // add the merged APIMatic metaConfig
        formData.append("global", JSON.stringify(metaConfig), {
            contentType: "application/octet-stream",
            filename: "global.json",
        });
        // Added the language package information
        if (languageConfig.packageInformation) {
            formData.append("packageInformation", JSON.stringify(fs_extra_1.readJSONSync(`${masterConfig.codeLangRoot}/${targetLang}/${languageConfig.packageInformation}`)), {
                contentType: "application/octet-stream",
                filename: "packageInformation.json",
            });
        }
        try {
            const response = yield axios_1.default.post(`${masterConfig.generateURL}=${languageConfig.apimaticTemplateId}`, formData, {
                auth: {
                    username: process.env.APIMATIC_USER || "",
                    password: process.env.APIMATIC_PASS || "",
                },
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
                },
                responseType: "arraybuffer",
            });
            const stream = response.data;
            // Write the zip file
            fs_extra_1.default.writeFileSync(`./bandwidth.zip`, stream);
        }
        catch (e) {
            throw new Error(e.message);
        }
    });
}
// Wraps all the props in an 'allOf' for XML
function wrapRef(oas) {
    const { schemas } = oas.components;
    Object.keys(schemas).forEach((schemaName) => {
        const props = schemas[schemaName].properties;
        if (!props)
            return;
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
function addOpenApiSpecs(formData) {
    if (spec === undefined) {
        for (const apiNamespace of specs) {
            const apiSpecPath = `${masterConfig.apiSpecRoot}/${apiNamespace}/${masterConfig.apiSpecFile}`;
            if (targetLang !== "phpold" || apiNamespace !== "Iris") {
                let stream;
                if (masterConfig.wrappedRef.includes(apiNamespace)) {
                    const apiSpec = fs_extra_1.readJSONSync(apiSpecPath);
                    const wrappedSpec = wrapRef(apiSpec);
                    stream = JSON.stringify(wrappedSpec);
                }
                else {
                    stream = JSON.stringify(fs_extra_1.readJSONSync(apiSpecPath));
                }
                formData.append("apiDescriptions", stream, {
                    contentType: "application/octet-stream",
                    filename: "api.json",
                });
            }
        }
    }
    else {
        // Add only the one spec to the form data
        const apiSpecPath = `${masterConfig.apiSpecRoot}/${spec}/${masterConfig.apiSpecFile}`;
        let stream;
        if (masterConfig.wrappedRef.includes(spec)) {
            const apiSpec = fs_extra_1.readJSONSync(apiSpecPath);
            const wrappedSpec = wrapRef(apiSpec);
            stream = JSON.stringify(wrappedSpec);
        }
        else {
            stream = JSON.stringify(fs_extra_1.readJSONSync(apiSpecPath));
        }
        formData.append("apiDescriptions", stream, {
            contentType: "application/octet-stream",
            filename: `api.json`,
        });
    }
}
// run the main functions
main();
//# sourceMappingURL=generate.js.map
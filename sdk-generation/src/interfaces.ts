export interface LangaugeConfig {
  apimaticTemplateId: string;
  apimaticMetaConfig: string;
  packageInformation: string;
}

export interface MasterConfig {
  version: string;
  generateURL: string;
  generateURLV1: string;
  validateURL: string;
  apimaticMetaConfig: string;
  apiSpecRoot: string;
  apiSpecFile: string;
  zipName: string;
  codeLangRoot: string;
  codeLangConfig: string;
  wrappedRef: string[];
}

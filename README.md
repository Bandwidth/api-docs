# API-Docs

Welcome to the home of Bandwidth's next generation of API docs! This repo serves as a mono repo that contains multiple OpenAPI specs that powers Bandwidth's external and internal API references and SDKs, and will eventually replace https://github.com/bandwidth/bandwidth.github.io and https://github.com/bandwidth/internal-api-docs.

## Contribution Guidelines Overview

1) If you're adding a new OpenAPI spec, you will need to change the `docusaurus.config.js` file to both add a new item in the navbar items as well as add the spec as a custom field. You will need to create a new page for the spec under the `./site/src/pages` directory as well.
1) If you're adding a new markdown file and/or markdown directory, make sure to update the `sidebar.js` file in the `./site` directory
1) If your changes should come with a changelog update, make sure to update the changelog file. Otherwise, include the `no-changelog` tag on your PR.

## Docsite Generation

The `package.json` file contains node scripts that let you run dynamic docsite servers locally, as well as build and serve static versions of the site. The commands are as follows:

```sh
# run from the root api-docs directory
npm run docsite-server   # run a dynamic site locally

npm run generate-dociste    # build a static site to the /site/build folder

nmp run serve    # host the static site in the /site/build folder
```

## Components
```sh
.
├── README.md
├── .github
│   ├── actions
│   └── workflows
├── markdown    # to be migrated into the site/docs folder
├── postman
├── sdk-generation
└── site
    ├── docusaurus.config.js    # config file for the docusaurus site
    ├── sidebar.js    # TOC for the docs directory
    ├── blog    # contains markdown blog articles
    ├── build    # where the static site is generated and served from
    ├── docs    # contains the API Guides and tutorials
    ├── redoc-plugin    # the needed index.js file for the redoc-plugin
    ├── specs    # Bandwidth's OpenAPI specs in .json format
    ├── src    # home for individual pages as well as react component and css settings
    ├── static    # Static files needed for the docsite (images, etc.)
    └── templates    # any helpful templates for new content
```

### site

The `./site` directory contains all of the content and configs needed to generate the docsite.

#### docusaurus.config.js

#### sidebar.js

#### /src

#### /specs

#### /docs

##### Markdown Directory Rules

#### /blog

#### /templates

### Postman

The `./postman` directory contains code and templates to generate our public facing Postman collection. The majority of the collection is generated from our OpenAPI specs, but `resources/postman_scaffold_collection.json` contains templates for Postman tutorials if someone wants to create one.

## PR Requirements

### Changelog Rules

Any changes to the `./site/specs` or `./site/docs` directories requires an update to `./site/src/pages/changelog.md`. If updating this isn't relevant, you must add the `no-changelog` label to your PR.

## SDK Generation

The `./sdk-generation` directory contains code and config for our SDK generation that supports our public SDKs. Much like the docsite generation, typically you'll interface with this through NPM commands.

`npm run generate -- -l <LANGUAGE> -s <SPEC>` is the command to generate an SDK. The `-s` flag is optional; not including it will default to the SDK with all APIs. The file `./sdk-generation/bandwidth.zip` will contain the generated code.

| Language | Notes |
|--|--|
| python | |
| ruby | |
| csharp | |
| java | |
| php | PHP >= 7.2
| phpold | Does not have XML support |
| node | Highly recommended to generate with a specified spec |

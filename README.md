# API-Docs

## Table of Contents

  1. [API Docs Strategy Overview](#api-docs-strategy-overview)
  1. [SDK Docs Strategy Overview](#sdk-docs-strategy-overview)
  1. [Contribution Guidelines Overview](#contribution-guidelines-overview)
  1. [Docsite Generation](#docsite-generation)
  1. [Adding a New Spec](#adding-a-new-spec)
  1. [Adding New Documentation](#adding-new-documentation)
  1. [Components](#components)
  1. [Markdown](#markdown)
  1. [PR Requirements](#pr-requirements)
  1. [SDK Generation](#sdk-generation)

## API Docs Strategy Overview

At a high level, we hope to provide 3 categories of documentation to our users, those being API references, guides, and sample apps. API references and guides will be provided within this project, while sample apps will be provided within the https://github.com/bandwidth-samples org.

API references are the "facts" about the APIs, and will typically be defined by OpenAPI specs. If OpenAPI is not sufficient (for example: BXML), then raw markdown files can be used. An example of an API reference would be the create message endpoint.

Guides cover a wide range of possibilities, but typically any step by step process required to use a feature should be a guide. These guides should be written as markdown files, and should link out to any API reference as needed. An example of a guide would be a description of how to respond to an inbound SMS.

## API Specs

The source of truth for all OpenAPI definitions are kept in a private repository - but the spec files in `./site/specs` mirror the source of truth. PRs against those files wont be accepted - but can be migrated to the private repo.

## SDK Docs Strategy Overview

Bandwidth's SDKs will contain thin READMEs that show the basics of getting started with the SDK, and link out to the full API reference. These READMEs will not contain all of the functions within the SDK; that should be defined with the API references.

## Contribution Guidelines Overview

1) If you're adding a new markdown file and/or markdown directory, make sure to update the `sidebar.js` file in the `./site` directory

## Docsite Generation

The `./site/package.json` file contains node scripts that let you run dynamic docsite servers locally, as well as build and serve static versions of the site. The commands are as follows:

```sh
cd site
yarn install

yarn start   # run a dynamic site locally

# or
yarn run build    # build a static site to the /site/build folder
yarn run serve    # host the static site in the /site/build folder
```

## Cypress Testing

After building and serving the site locally using one of the methods above, from within the `/site` directory, you may run `yarn test` to run all cypress tests in the command line,
or `yarn run cy:open` to open the cypress client and runs tests from the cypress GUI.

## Adding a New Spec

To add a new spec (or update an existing spec), please head over to our [api-specs](https://github.com/Bandwidth/api-specs) repository, as this is the source of truth for all of Bandwidth's internal and external API Specs. You may also follow the guide [here](https://bandwidth-jira.atlassian.net/wiki/spaces/DX/pages/4098359409/How+to+Update+API+Specifications+and+Contribute+to+Developer+Documentation) that explains in detail how to add new spec files to the `api-specs` repo.

### Versioned Specs

To account for versioned API Documentation we have a [Spec Version Dropdown](./site/src/components/SpecVersionDropdown.js) component that allows you to add a dropdown menu to the api reference page with links to the other versions of your API Specification. In order to implement this feature your spec `.tsx` pages need their own directory within the `./site/src/pages/apis` directory. This will be done for you by the DevX team after you update your changes on the `api-specs` repo.

Sample Directory:

```sh
# ./site/src/pages
.
└── apis
    ├── bwi    # A Directory for versioned API Specs
    │   ├── beta.tsx
    │   ├── index.tsx    # The default/production API spec. URL stub will be /apis/bwi
    │   ├── v2.tsx
    │   └── ws.tsx
    ├── index.tsx
    ├── messaging.tsx
    ├── number-lookup.tsx
    ├── numbers.tsx
    └── voice.tsx
```

The default version should be named `index.tsx` within the directory so that the URL shows neatly, and then you would add the following sippet to the individual pages (and adjust the default and list accordingly depending on the page.)

```ts
export default function ApiReferencePage() {
    const {siteConfig} = useDocusaurusContext();
    const options = [    // The options const needs to contain all of the available pages
        {title: "Legacy", link: "/apis/bwi/ws"},
        {title: "V1", link: "/apis/bwi"},
        {title: "V2", link: "/apis/bwi/v2"},
        {title: "Beta", link: "/apis/bwi/beta"}
      ];
    const version = "V1"    // The version Const determines which option gets the selected attribute in the <select> dropdown

    return (
        <Layout
          title={`Bandwidth International API Reference`}
          description=""
          keywords="Bandwidth,API,International,Voxbone">
            <SpecVersionDropdown options={options} default={version} />
            <ApiReference spec={siteConfig.customFields.bwiSpec} color={siteConfig.customFields.bwBlue} />
        </Layout>
    );
}
```

## Adding New Documentation

To add new documentation to the site, please follow these instructions:

  1. Add your .md or .mdx file to the `./site/docs/{relevantDirectory}` directory
  1. Ensure your file has the necessary [heading and title](#markdown)
  1. Update the `./site/sidebar.js` file with the `"{relevantDirectory}/{docTitle}"` in the relevant spot


## Components

```sh
.
├── README.md
├── .github
│   ├── actions
│   └── workflows
├── postman
├── site
│   ├── docusaurus.config.js    # config file for the docusaurus site
│   ├── sidebar.js    # TOC for the docs directory
│   ├── blog    # contains markdown blog articles
│   ├── build    # where the static site is generated and served from
│   ├── docs    # contains the API Guides and tutorials
│   ├── redoc-plugin    # the needed index.js file for the redoc-plugin
│   ├── specs    # The source of truth for the docsites. Generally remains empty and is populated during CICD processes
│   ├── specs-source    # Bandwidth's OpenAPI specs in .json format
│   ├── src    # home for individual pages as well as react component and css settings
│   ├── static    # Static files needed for the docsite (images, etc.)
│   └── templates    # any helpful templates for new content
│
│ # Below this comment to be eventually removed from the repo
├── markdown    # to be migrated into the site/docs folder
├── sdk-generation
├── external
└── internal
```

### site

The `./site` directory contains all of the content and configs needed to generate the docsite.

#### docusaurus.config.js

This file defines the configuration for the docusaurus site. It controls the navigation bar, footer, and many other aspects of the site.

#### sidebar.js

This file defines the sidebar for the docs section of the site. Changes here will be reflected in the docs page, essentially this controls the navigation for the entirety of the docs section.

The sidebar.js file can be configured to create multiple sidebar groups that can be hidden depending on which documentation is being viewed. Ex. only a sidebar pertaining to messaging can be shown when looking at docs related to messaging. Code ex.:

```
module.exports = {
  accountSidebar: {
    'Account': [
      'account/structure',
      'account/credentials',
    ],
  },
  numbersSidebar: {
    'Numbers': [
       'numbers/about-numbers'
    ],
  },
  voiceSidebar: {
    'Voice': [
      'voice/about-voice'
    ],
  },
  messagingSidebar: {
    'Messaging': [
      'messaging/about-messaging'
    ],
  },
};
```

When looking at `account/structure` in this sidebar config - the user would only see the other docs under the `Account` object and not anything pertaining to voice/messaging/etc.

#### /src

This directory mostly was autogenerated by docusaurus. The `components/` directory contains docusaurus config, the `css/` contains the css styling, and `pages/` contains the individual page files for the site. Pages can be populated with React code and linked to using the `docusaurus.config.js` file.

#### /specs

The formatted OpenAPI specs with added code snippets **only** for rendering on the doc site. This is no longer the source of truth for our OpenAPI specs. **Please do not make spec changes in this folder.**

#### /docs

Markdown documents will be placed in this sub-directories here - depending on which product they apply to. Any content added here will need to be added to the `sidebar.js` file to make it possible for users to find - otherwise the doc will be inaccessible without a direct link.

#### /blog

Will be filled out later, but blog files will go in here

#### /templates

Custom templates for any additions that people may need to use.

#### /scripts

Scripts for the docsite. Includes things like code snippet validation, and code snippet insertion into the OpenAPI specs.

### Postman

The `./postman` directory contains code and templates to generate our public facing Postman collection. The majority of the collection is generated from our OpenAPI specs, but `resources/postman_scaffold_collection.json` contains templates for Postman tutorials if someone wants to create one.

## Markdown

Docusaurus supports the use of .MDX files - making the use of markdown even more powerful than the previous docsite repository. This allows us to generate JSX directly in the markdown files that will be rendered nicely in docusaurus. A good resource on the capabilities of MDX in docusaurus can be found [here](https://docusaurus.io/docs/markdown-features).

The Docusaurus flavored markdown also supports setting markdown attributes in the guide - it is recommended to start each `.md` or `.mdx` file with the following:

    ---
    id: docId    <!--the document id - used as a reference in the sidebar.js folder-->
    title: Document Title    <!--Used by Docusaurus to generate the title properly (for SEO)-->
    slug: /{product}/docName    <!--generates the path after the base URL to provide a neat link for sharing-->
    description: description of your document <!--becomes the <meta name="description" content="..."/> and <meta property="og:description" content="..."/> in <head>, used by search engines. If this field is not present, it will default to the first line of the contents.-->
    keywords: <!--Keywords meta tag for the document page, for search engines.-->
      - some
      - keywords

    <!-- Optional Fields -->
    hide_title: false    <!--Whether to hide the title at the top of the doc. By default it is false.-->
    sidebar_label: Document Title    <!--The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's sidebar_label will default to its title.-->
    custom_edit_url: github.com/repo/thisFile.mdx   <!--The URL for editing this document. If this field is not present, the document's edit URL will fall back to editUrl from options fields passed to docusaurus-plugin-content-docs-->
    image: '@site/static/img/myImg.png'    <!--Cover or thumbnail image that will be used when displaying the link to your post.-->
    ---

The above example is YAML, so it is suggested to remove comments as well as wrap strings with special characters like `:` in quotes.

### Embedding React Components

MDX supports JSX within the markdown and generates it as React components - making possibilities endless.

The below adds a language switcher in line with text in an MDX file:

    This text will be rendered before the language switcher

    import Tabs from '@theme/Tabs';
    import TabItem from '@theme/TabItem';

    <Tabs
      groupId="abc123"
      defaultValue="js"
      values={[
        { label: 'JavaScript', value: 'js', },
        { label: 'Python', value: 'py', },
        { label: 'Java', value: 'java', },
      ]
    }>
    <TabItem value="js">

    ```js
    function helloWorld() {
      console.log('Hello, world!');
    }
    ```

    </TabItem>
    <TabItem value="py">

    ```py {1-2}
    def hello_world():
      print 'Hello, world!'
      # the above code is highlighted!
    ```

    </TabItem>
    <TabItem value="java">

    ```java
    class HelloWorld {
      public static void main(String args[]) {
        System.out.println("Hello, World");
      }
    }
    ```

    </TabItem>
    </Tabs>

    And this text will be rendered after the language switcher

# external-api-docs

Welcome to the home of Bandwidth's next generation of API docs! This repo serves as a mono repo that contains multiple OpenAPI specs that powers Bandwidth's external API references and SDKs, and will eventually replace https://github.com/bandwidth/bandwidth.github.io.

## How It Works

The `./specs` directory contains all of the OpenAPI specs that our external customers will use. Updates to these specs trigger the pipeline that publishes new SDKs and docs. For the SDKs, the package version increase is based on the version increase of changed specs. For example, if a spec has a minor version bump, the new SDK will also have a minor version bump. New services added default to a minor version increase in the SDKs.

Similarly, the `./postman` directory contains templates and fillers for our public facing postman collection. These are used to generate the full collection.

The `./markdown` directory contains markdown files and config files used for non API references on the docsite.

Our automation exists within our Github Actions workflows. These can be found in the `.github/workflows` directory. Updates to the markdown files, postman collections, and OpenAPI specs trigger these various workflows to keep our references up to date.

### Markdown directory structure and table of content rules

APIMatic provides support for a wide range of configuration for table of content (TOC) setup. However, we have come up with some rules to standardize how we use this feature

#### Root Directory

The first level TOC `./markdown/toc.yml` will be structured as follows

```
toc:
- group: <Display Name>
  dir: <directory>
```

Example:

```
toc:
- group: Overview
  dir: overview
```

Every sub directory (`<directory>`) will need its own TOC. There is no need to place individual markdown files in the root directory. All markdown files need to exist in a sub directory that is either 1) the relevant product vertical, or 2) a general guide bundled with the rest of the guides

#### Sub Directories

All sub directories TOC will be structured as follows

```
toc:
- page: "<Page title>"
  file: <file.md>
- group: <Display Name> #Optional
  dir: <directory> #Optional
```

Example:

```
toc:
- page: "Overview"
  file: overview.md
- group: Guides & Tutorials
  dir: guides_and_tutorials
```

Each markdown file will be its own page on the docsite that sits underneath its directory structure in the docsite's left navigation.

Any additional sub directories must follow the same format.

#### Notes

All directories and files are relative to `toc.yml`

The left nav is based on the order of `toc.yml`

#### Pictures

Any pictures to be displayed in the docsite should be stored in `./static` in a resonable subdirectory, and referenced in the markdown directory with normal markdown reference syntax.

Example

```
![Bandwidth-Callbacks](../../static/images/bandwidth_callbacks.png)
```

#### Relative Links

TODO

#### Language Specific Guides

APIMatic has support for language specific guides that only render when certain languages are selected. However, we have not received this information yet, and we will fill in when we do.

## SDK Updates

SDK updates _are not_ done automatically through this project. Please go to https://github.com/Bandwidth/bandwidth-sdks for SDK updates.

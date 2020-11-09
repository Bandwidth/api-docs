# external-api-docs

Welcome to the home of Bandwidth's next generation of API docs! This repo serves as a mono repo that contains multiple OpenAPI specs that powers Bandwidth's external API references and SDKs, and will eventually replace https://github.com/bandwidth/bandwidth.github.io.

## How It Works

The `./specs` directory contains all of the OpenAPI specs that our external customers will use. Updates to these specs trigger the pipeline that publishes new SDKs and docs. For the SDKs, the package version increase is based on the version increase of changed specs. For example, if a spec has a minor version bump, the new SDK will also have a minor version bump. New services added default to a minor version increase in the SDKs.

#!/bin/sh

npm install
node site/scripts/validate_code_snippets.js js node

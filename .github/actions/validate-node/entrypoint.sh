#!/bin/sh

npm install
cd site/code-snippets
npm install -g npm-check-updates
ncu -u && npm update
npm install && cd .. && cd ..
python3 site/scripts/validate_code_snippets.py js node

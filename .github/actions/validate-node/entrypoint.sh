#!/bin/sh

npm install
cd site/code-snippets && npm install && cd .. && cd ..
python3 site/scripts/validate_code_snippets.py js node "site/code-snippets/node_modules/*"

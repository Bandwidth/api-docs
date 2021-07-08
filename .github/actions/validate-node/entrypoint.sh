#!/bin/sh

npm install
cd site/code-snippets && npm install && npm update && cd .. && cd ..
python3 site/scripts/validate_code_snippets.py js node

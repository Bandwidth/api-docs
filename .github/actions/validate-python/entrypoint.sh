#!/bin/sh

pip install -r requirements.txt
python site/scripts/validate_code_snippets.py py python

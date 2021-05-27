#!/bin/sh

bundle install --gemfile="/Gemfile"
python3 site/scripts/validate_code_snippets.py py python3

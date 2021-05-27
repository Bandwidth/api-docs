#!/bin/sh

gem install bandwidth-sdk
python3 site/scripts/validate_code_snippets.py rb ruby "site/code-snippets/Messaging/GetMessages/sample.rb"

#!/bin/sh

cp /composer.json .
composer require bandwidth/sdk
python3 site/scripts/validate_code_snippets.py php php

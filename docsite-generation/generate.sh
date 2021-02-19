#!/bin/sh

cd ..

#Setup package for generation
rm -rf package/
rm -rf portal/
mkdir package
mkdir package/spec
cp -R specs/* package/spec/
cp -R configuration/Global package/spec
cp -R content package/
cp -R static package/
cp bw-portal.APIMATIC-BUILD.json package/bw-portal.APIMATIC-BUILD.json
zip -r package.zip package

#Generate package
curl titan.apimatic.io/api/build -F 'file=@package.zip' -o portal.zip
mkdir portal
unzip -o portal.zip -d portal

#Cleanup unneeded files
rm -rf package
rm package.zip
rm portal.zip

if [ ! -f portal/index.html ]; then
    echo "Docsite failed to generate"
    exit 1
fi

if [ "$1" = "server" ]; then
    http-server ./portal -c-1 #disable caching since this page will probably be reloaded frequently
fi

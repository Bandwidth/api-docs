# Container image that runs your code
FROM composer:latest

# We need python3 for the script
RUN apk add --no-cache python3 

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh
COPY composer.json /composer.json

#Make entrypoint.sh executable
RUN chmod +x /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]

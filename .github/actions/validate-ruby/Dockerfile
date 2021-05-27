# Container image that runs your code
FROM ruby:latest

# We need python3 for the script
RUN apt-get install python3

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh
COPY Gemfile /Gemfile 

#Make entrypoint.sh exacutable
RUN chmod +x /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]

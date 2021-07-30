FROM ubuntu:18.04
USER root
WORKDIR /home/app
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_lts.x  | bash -
RUN apt-get install -y nodejs
ENTRYPOINT ["/bin/bash", "npm.sh"]

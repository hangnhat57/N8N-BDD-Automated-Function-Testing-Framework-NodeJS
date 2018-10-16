#!/bin/bash
set -v
#Install nodejs
if [ $(dpkg-query -W -f='${Status}' npm 2>/dev/null | grep -c "ok installed") -eq 0 ];
then
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
  sudo apt-get install nodejs
  sudo apt install build-essential libssl-dev
fi

#Install dependencies
npm install 
#Start up selenium grid
sudo docker-compose up -d
#Copy environment file 
cp example .env
#Start testing
npm run test
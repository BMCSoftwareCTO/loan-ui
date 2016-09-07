#!/bin/bash

export PATH="/home/ubuntu/.nvm/versions/node/v6.2.2/bin/:/root/.nvm/versions/node/v6.2.2/bin/:$PATH"
echo "PATH=$PATH"
echo "NPM path=$(which npm)"

export LOAN_VERSION=1
cd /home/loanapp/loanui
echo "cd into $(pwd)"

#/root/.nvm/versions/node/v6.2.2/bin/npm start
npm start


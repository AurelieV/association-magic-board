# loopback-init

# Installation
## Install ansible
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible

## Run the script
Then run make provision-local (for ubuntu)

## Install mongo
(TODO: to it on ansible script)
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo service mongod start

##Create a user for mongo
(TODO: to it on ansible script)
##Configure your database
Copy datasources.json.dist to datasources.json with your password (do not commit it)

## Load dependencies
npm install

## Use pm2
pm2 startup ubuntu et run le script donné
pm2 start my-app.js

## Install strongloop
sudo npm install -g strongloop

## Build application
make build-lb-services
./node_modules/.bin/bower install 
./node_modules/.bin/gulp build




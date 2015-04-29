provision-local:
	ansible-playbook devops/provisioning/site.yml --connection=local

build-lb-services:
	lb-ng server/server.js www/js/lb-services.js -u /association-magic-board/api

upload-fixtures:
	coffee fixtures/load.coffee

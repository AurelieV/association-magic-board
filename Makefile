provision-local:
	ansible-playbook devops/provisioning/site.yml --connection=local

build-lb-services:
	lb-ng server/my-app.js www/js/lb-services.js -u /my-app/api

upload-fixtures:
	coffee scripts/fixtures_loading.coffee

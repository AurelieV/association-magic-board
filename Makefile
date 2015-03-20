provision-local:
	ansible-playbook devops/provisioning/site.yml --connection=local

build-lb-services:
	./node_modules/.bin/gulp lb-services

upload-fixtures:
	coffee scripts/fixtures_loading.coffee

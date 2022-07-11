MAKEFLAGS += --silent

build:
	npm run build

build-watch:
	pug -w template -o src --pretty

launch:
	npm start

analysis:
	npm run analysis

clean:
	rm -rf dist
	rm -rf parcel-bundle-reports*

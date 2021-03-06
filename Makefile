install:
	npm install

start:
	heroku local -f Procfile.dev

start-backend:
	npx nodemon server/index.js

start-frontend:
	npm run start --prefix client

install-deps:
	npm ci

build:
	npm run build

lint:
	npx eslint . --ext js,jsx

lint-fix:
	npx eslint . --ext js,jsx --fix

publish:
	npm publish

deploy:
	git push heroku

test:
	npm test
	
test-coverage:
	npm test -- --coverage --coverageProvider=v8



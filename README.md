# DEMO Express API

## Available Scripts
In the project directory, you can run:

Install nodemon globally. `npm install nodemon -g`

`npm install` to dowload all the dependencies

`npm start` will start server on [http://localhost:8000](http://localhost:8000)


### Usage in Development

    npm start - Node server start on http://localhost:8000
    npm run lint - Eslint Execution
    npm run test - Unit Test
    npm run test:coverage - Unit Test with Coverage
    npm run test:integration - APIs Integration Test Only
    npm run test:integration:coverage - Integration Test Coverage
    npm run test:lint - Eslint Execution for Specs


## APIs Available
   1. GET - [/api/reporters](http://localhost:3000/api/reporters)
   2. GET - [/api/reporters/:id](http://localhost:3000/api/reporters/3bf4b8eae5674a4e853ced241e832016)
   2. GET - [/api/reporters/:id/filter?fromDate=20150122&endDate=20150415](http://localhost:3000/api/reporters/3bf4b8eae5674a4e853ced241e832016/filter?fromDate=20150122&endDate=20150415)


## Request Header to access APIs

    Content-Type: application/json
    x-brand: 'demo-api'
    x-correlation-id: 8eae5674a4e853ced2413bf4b8eae5ew

## License

UNLICENSED © [RAKESH KUMAR]

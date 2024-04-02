# Basic-Express-Server

Project description goes here.

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your
Editor (not mandatory).

### Install

    git clone https://github.com/ORG/PROJECT.git
    cd PROJECT
    npm install

### Configure app

Any environment configuration steps.

### Start & watch

    npm run dev
    npm start

### Test

    npm test
    npm test:watch

## Architecture

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── __tests__
│   ├── server.test.js (integration test)
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── logger.test.js (unit test)
│   │   ├── validator.js
│   │   └── validator.test.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md
```

- `index.js` at the root of your repository, which will act as the "entry point" to your server.
  - should require `src/server.js`
  - should require `dotenv`, reading PORT from your `.env` file
  - It should call the `.start()` method from the server with the PORT set in your environment
- `src/server.js` which will serve as your server 'module' ... will contain all of the module connections for the server
  - Must export an object with a `start()` method (it should not start on it's own) and a reference to the express `app`
- Create a middleware folder and add 2 middleware modules to it:
  - `logger.js`
    - Performs a console.log with the request method and path
    - Import this into your server and set it up to run at the application level for all routes
  - `validator.js`
    - Checks the query string for a `name` property
    - Sends the request through when valid, forces an error when not
- Create a error-handlers folder and add 2 modules to it:
  - `404.js`
    - Sends a 404/Not-Found message as the response
    - Import this into your server and set it up to be "used" after your other routes
  - `500.js`
    - Sends a 500/Server Error message as the response
    - Import this into your server and set it up to be "used" as the last route
- Create the `/person` route within your `server.js`
  - This route should use the validator middleware to check the user's input
  - If valid, send a JSON object through the response with the name value in it
    - i.e. `{"name": "fred" }`

### Languages & tools

* JavaScript
* Node
* Express
* Cors
* Dotenv
* Jest
* Nodemon
* Supertest

## Change Log

0.0.1 (2020-12-14)

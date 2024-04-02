# Basic-Express-Server

Project description goes here.

## Getting Started

### Requirements

For development, you will only need [Node](http://nodejs.org/) installed in your
environment.
Please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your
Editor (not mandatory).

### Install

    git clone git@github.com:Arvoya/basic-express-server.git
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

```
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
│   │   ├── validator.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md
```

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

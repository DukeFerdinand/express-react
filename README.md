## MERN Boilerplate

#### This is a simple boilerplate I setup to save a bit of time with Webpack and ESLint. Sets up Express, Mongo, and a basic React app with a Redux store. The Redux store uses the Redux-Saga middleware to ping the database.


#### I tried to set this up with minimal bloated crap so you don't have _too_ much to take out before getting on with your application. 

#### Happy Coding! :)

### Features

Mostly based on these libraries:
* Express
* Mongoose (for mongodb)
* React
* Redux/Redux-Saga
* axios

Planned features:
* Webpack build system (feel free to PR if you want to make one sooner than I do)

Uses `webpack` and `babel` for the build tools, and `eslint` for the linter. Linting is very subjective, but I've included my personal `.eslintrc` based on the `airbnb` packages if you need one and don't mind.

### How to run: 
  1. You WILL need MongoDB installed to use this application.
      * `mongod` to start, or `mongodb` if it's already running
      * If you DON'T have MongoDB installed, please see [here](https://www.mongodb.com/download-center?jmp=tutorials#community)
  1. Make sure you have `node`, `npm` or `yarn`, and `nodemon` installed.
      * `$ node -v` etc.
  2. Install dependencies
      * `$ (yarn or npm) install`
  3. Run the dev server
      * `$ yarn start` or `$ npm run start`
      * Open your browser to http://localhost:3000/ to see the client. **NOTE:** to see an example API response, go to http://localhost:3000/api. This is also visible on the root route in the client as `Hello from your API!`

### Creating a production build

There's no production-optimized build command/webpack config quite yet :( Make a PR if you set one up!

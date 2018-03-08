## Express-React Boilerplate

#### This is a VERY simple boilerplate I setup to save a bit of time with Webpack and ESLint. Doesn't contain _too_ much bloated 'demo app' garbage, so it's pretty easy to get going.

Mostly based on these libraries:
* Express
* React
* Redux/Redux-Saga
* axios

Planned features:
* MongoDB connection
* Webpack build system

Uses `webpack-dev-server` for development, `babel` for the build tool, and `eslint` for the linter (linting is very subjective, but I've included my personal `.eslintrc` based on the `airbnb` packages if you need one and don't mind).

### How to run:
  1. Make sure you have `node`, `npm` or `yarn`, and `nodemon` installed.
      * `$ node -v` etc.
  2. Install dependencies
      * `$ (yarn or npm) install`
  3. Run the dev server
      * `$ yarn app` or `$ npm run app`
      * Open your browser to http://localhost:3000/ to see the client. **NOTE:** to see an example API response, go to http://localhost:3000/api. This is also visible on the root route in the client as `Hello from your API!`

### Creating a production build

While there's no production-optimized build command/webpack config quite yet, you _can_ run `yarn build` or `npm run build` to get a `bundle.js` put into `YOUR_APP_DIR/dist/public/assets` and then configure the express server to send the `index.html` in that same `YOUR_APP_DIR/dist/public/` folder using a `res.sendFile()`. **NOTE:** This _is_ a planned feature, I just haven't implemented it quite yet.
# Homework: WordCounter

### Learning Objectives

- Be able to install and configure webpack in an application
- Be able to implement the pub/sub pattern in a front-end JavaScript application

## Brief

Your task is to create a word counter application that allows a user to submit some text, and see how many words they entered displayed below.

Use the pub/sub pattern to create modular views, with a model that handles the business logic. You should use the start point, which has the HTML already provided.

Use webpack to bundle your JavaScript files.

### MVP

- A user should be able to enter text into the text area, submit it and see the number of words that they entered, displayed below.

### Planning

You will need to set-up webpack in your application:

1. Initialise npm - `npm init`
2. Install 'webpack' and 'webpack-cli' - `npm install webpack webpack-cli`
3. Create a webpack config file - webpack.config.js
4. Add the configuration details to the config file
5. Add a script to the package.json to run webpack in watch mode - `"build": "webpack -w"`
6. Add a script tag to link to the bundled file in the HTML - `<script type="text/javascript" src="js/bundle.js"></script>`
7. Run webpack - `npm run build`
8. Check the log that shows the JavaScript has loaded is showing in the browser console.
9. Add `bundle.js` to a .gitignore file

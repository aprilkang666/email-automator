This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
Project Status: **Completed (continuously adding new features)**

## Survey-Quicker - Survey Campaign Web Application
Welcome to Survey-Quicker, a web application to help you collect user feedback easily. 

The is a Javascript based application utilized advanced features of React, Redux, Express, and Mongo.

## Demo

Application - [https://young-scrubland-50220.herokuapp.com/](https://young-scrubland-50220.herokuapp.com/)

#### Note: Please input `"4242 4242 4242 4242"` as the card number when adding credits to the account.

## Technologies used:
- React
- Node v10.16.3
- Frameworks: Express, Redux, Passport, OAuth2.0 Google API
- [Google Cloud Platform](https://console.developers.google.com)
- [Sendergrid](https://sendgrid.com/) to send the feedback by email and track them
- [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas) for the database
- [Heroku](https://www.heroku.com/) for the deployment 

## Install
* Node
* Git
* Heroku-cli
* [Create React App](https://github.com/facebook/create-react-app) ->  npm install -g create-react-app

## Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Create a `config` folder and put into it a file named `dev.js` with the content bellow.
```
module.exports = {
  googleClientID: '275664570392-81ipvkm04b28rmd5eohqva7pk0bnf32s.apps.googleusercontent.com',
  mongoURI: 'mongodb+srv://April:7u3j14Dy3ASHKKHX@emaily.vq6do.mongodb.net/emaily retryWrites=true&w=majority',
  stripePublishableKey: 'pk_test_51HFBxvEFJpNHcyFU0d7eckCvhXM6Jgdrd6LJRbxehEfxMWJEEoZXKsiCGO4NvhnFHc9E5jiFZk9nEvchiW24deZ700DPJTrFs6',
  redirectDomain: 'http://localhost:3000'
};
```

## Run

Run in development mode
```
npm run dev
```

## Deploy

It is running on Heroku. Just commit and push to master configured there.

## Commands

* Setting heroku repository `heroku git:remote -a emaily-api`
* Push and Deploy `git push heroku master`
* Open URI `heroku open`

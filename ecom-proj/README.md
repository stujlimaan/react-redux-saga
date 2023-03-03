# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `Required package`
 `  npx create-react-app project-name, 
    npm install redux,
    npm install react-redux,
    npm install redux-saga `,

### Make Redux wrapper 
 - make all files (actions, reduces,store)
 - make wrapper around react-application with provider
 - make redux store

## what is actions 
- Describes the changes in the state of  application
- only  way to change the state is to emit an action an object dexcribing what happened
- { type:"  "}
- actions has type property and it should be defined in string  constraint
-  action type always to be constant then good for
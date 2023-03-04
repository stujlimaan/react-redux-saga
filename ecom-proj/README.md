# Getting Started with Create React App

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

## what is store 
- Holds state of your application
- the store of your application is stored in an object tree within a single store

## what is actions 
- Describes the changes in the state of  application
- only  way to change the state is to emit an action an object dexcribing what happened
- { type:"  "}
- actions has type property and it should be defined in string  constraint
-  action type always to be constant then good for


## what is reducers
- Actually carries out the state transition depending on  the action
- Reducers decides how the state of application changes depending upon the action sent to the store
- Reducers are the function that acceptd state and action as parameter and returns the next state of the application
- (previousState,action)=>newState

### Get data in component from redux
- make header and main  component
- add image and css
- send data from main component
- get data in header component


## Redux toolkit with new action and reducer file

    ` npm install @reduxjs/toolkit`

## `configure saga middleware`
- make saga file and write saga basic function
- Register saga middleware with store
- check flow 

        ` npm install redux-saga `
## call api with saga and set result
- call saga function from Action
- make function in saga for API
- send result from saga to Action
- pass data to reducer
- get data in main component

## product list ui component
- show product in ui
- add styles in product ui
- load product when page load
- add cart and remove cart ui with api data

## remove to cart with id
- apply filter function in reducer
- test added product  in cart

## make routing and cart page
- install react router dom
- make main and cart page
- add link with pages
- add style for header and logo

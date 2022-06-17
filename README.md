# Redux Punch
## What is Redux Punch?

* Redux punch is a project recipe bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then all the goodies of redux, react-redux, react-router-dom, redux-persist, redux-thunk and reselect are added. 
* Clean ux interface integration with [material ui](https://mui.com/) is done.

## Why Redux Punch?

* Inspired by Convention Over Configuration Approach (COCA), Redux Punch provides some default convention using which ui application development becomes a breeze.
* Users of Redux Punch do not need to know all the inner details how the frameworks work but can follow a simple convention to make everything work.

## Setting up the Project

* Pull the source code and cd to redux-punch dir.
```
git clone https://github.com/vensr/redux-punch.git
```
* Install all dependencies
```
yarn install
```
* Start the app
```
yarn start
```
* Access the app at http://localhost:3000
* You can then modify the code to suit your needs or take inspiration from the code to do whatever you wish to

## Try using Docker

Try running the app without setting up any code

* Pull docker image
```
docker pull venkatesh5/redux-punch
```
* Run the image
```
docker run -it -p 3000:3000 venkatesh5/redux-punch
```

## Running in Production

The project contains a docker file that can be used to build the docker image to run in production. 

* Build the image using
```
docker build -t redux-punch .
```
* Run the built image using 
```
docker run -it -p 3000:3000 redux-punch
```
* Access the app at the http://localhost:3000


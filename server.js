
// This is Our main or server file where all of the file will be included 

// npm install nodemon --save-dev ->nodemon
//npm init -y or npm init->package.json
//npm install ->package-lock.json
//npm install express
//npm install mongodb
//node modules command->npm i express dotenv mongoose colors
//npm run server ->for entry point
// npm i express-async-handler -> for getting async facility package
//control + c for stop server
//npm install ejs ---> integrate the templating engine into your project.
//npm install express-session------>for getting and storing session

//created Express application using express() and assign it to the app variable.
const express = require('express');
const app = express();

const colors = require('colors'); //module is often used for adding colored output to the console

//used to load environment variables from a file named .env into process.env
const dotenv = require('dotenv').config();


// const session = require('express-session');

const path = require('path'); //for keeping all views
app.use(express.static('public'));  //set public as a default folder

// Connection to the MongoDB database
const connectDB = require('./config/db');
connectDB();

const port = process.env.PORT || 5000; //if env port is not working then work 5000 port

//From postman or view form for showing body of the requested value need to use this couple of this code 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine to EJS
app.set('view engine', 'ejs');

// multiple routes making with prefix
app.use('/', require('./routes/authRoute'));


//server starting at the end of the project
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
})




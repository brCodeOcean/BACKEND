// EJS stands for Embedded JavaScript. It allows you to embed JavaScript code within your HTML files, making it possible to 
// dynamically generate HTML content based on your data. EJS is easy to use and integrates seamlessly with Express.js
// and other Node.jsframeworks.

// For seting up ejs we need to follow below steps
// 1. install ejs
// 2. configure ejs 
//     app.set("view engine", "ejs");
// 3. create a folde named "views"
// 4. create a "ejs" file inside "views" folder
// 5. instead of "send" need to use "render"

const express = require('express');
const app = express();

//configuring ejs
app.set("view engine", "ejs");

//configuring static files
app.use(express.static(`public`)); 

// app.get('/', (req, res) => {
//     res.render('index');
// });


app.get('/', (req, res) => {
    res.render('index', {age: "27"});
});

app.get('/contact', (req, res) => {
    res.render('contactpage', {name: "balaram"});
});

// //Dynamic Routing
// app.get('/profile/:username', (req, res) => { //Need to mention ":" after "/" and need to mention a variable(e.g., username)
//     res.send(`Hello from ${req.params.username}`); //for accessing variable values from different route need to use "req.params"
// });

//setting a error middleware for demo
app.get('/error', (req, res) => {
    throw Error("something went wrong");
});

//Error handling
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('errormid', { error: err })
  });

const port = 4000;

app.listen(port, () => {
    console.log(`server started at: ${port}`);
});
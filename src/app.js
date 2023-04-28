//path module
const path = require("path");
//require express
const express = require("express");

//using express
const app = express();

//port number
//process.env.PORT -- we use to run in by default port or defined port 3000
const port = process.env.PORT || 3000;


// public static path 
const static_path = path.join(__dirname, "../public");



app.use(express.static(static_path));


//setting up views engine
app.set('view engine', 'hbs');


//start routing

//for Home Page
app.get("/",(req,res)=>{
    res.render('index')
});

//for About Page
app.get("/about",(req,res)=>{
    res.render('about.hbs');
});

//for weather Page
app.get("/weather",(req,res)=>{
    res.render("Welcome to mighty's weather page");
});

//for 404 not found
//we * for other non mentioned pages
app.get("*",(req,res)=>{
    res.render("404 Not Found");
})

//listen server
app.listen(port,()=>{
    console.log(`server running at ${port}`);
});
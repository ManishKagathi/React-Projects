
import express from "express";  // Import express module
const app = express(); // create app which uses this express object
const port = 3000;


// Send some response to app from server
app.get("/",(req, res) =>{
    res.send("<h1> Home Page</h1>");
});

app.get("/contact",(req,res) =>{
    res.send("<h1> Contact me on</h1><p>Ph: 9164363670</p>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1><p> My name is Manish</p>");
});

app.get("/Loginpage",(req,res) =>{
    res.send("<h1>Log in</h1><p> Enter Email and Password </p>");
});


// make app to listen to server from port 3000
app.listen (port, ()=>{
 console.log(`Server is running from port ${port}`)
});
// import express from "express";
// import bodyParser from "body-parser";

const express = require("express");
const bodyParser = require("body-parser");


// import comment.js and users.js to index.js
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');

// import userRoutes from ('./routes/user'); // ??????????????????????????/
// import commentRoutes from ('./routes/comment'); 

const app = express();
const port = 3000;

// once Router files are exported using module.exports function, we can use those variables here
app.use("/comment",commentRoutes);
app.use("/user", userRoutes)


app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})



const express = require("express");

// Create router objerct, which will serve everything we need 
// same as we create object of express() i.e.,const app = express();
const router = express.Router();

// As Router will serve us now, we shold ask router not app,replace app with router

router.get("/", (req,res) => {
    res.send("<h1>User Details</h1>")
})

router.post("/", (req,res) => {
    res.send("<h1>User Details</h1>")
})

router.put("/", (req,res) => {
    res.send("<h1>User Details</h1>")
})

router.delete("/", (req,res) => {
    res.send("User Details</h1>")
})

// To give access to above code, we need to export using module.exports

module.exports = router;
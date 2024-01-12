
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised = false; 
const pw="ILoveKohli";

app.use(bodyParser.urlencoded({extended: true}));

function validatePassword(req,res,next){
    //const passWord = req.body["password"];
    console.log(req.body["password"]);
    if(req.body["password"] === pw){
        userIsAuthorised = true;
    } 
        next();
}
app.use(validatePassword);

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req,res) =>{
if(userIsAuthorised){
    res.sendFile(__dirname + "/public/secret.html")
}else{
    res.sendFile(__dirname + "/public/index.html")
}
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


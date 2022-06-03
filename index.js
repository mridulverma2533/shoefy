const express = require("express")
const app = express();
var bodyParser = require('body-parser');
require("./db")

const port = process.env.PORT || 5053;

app.use(express.json());
// var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
const userroutes = require("./routes/userroutes");
app.use(userroutes)


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
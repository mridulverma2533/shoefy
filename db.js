const mongoose = require("mongoose");
 mongoose.set('debug', true);

mongoose.connect("mongodb+srv://MridulKumar:goldenfish@cluster0.r7sw3.mongodb.net/?retryWrites=true&w=majority",{
    
    useNewUrlParser:true,

    useUnifiedTopology: true 

}).then(()=>{
    console.log("connection successful")
}).catch(()=>{
    console.log("no connection")
})
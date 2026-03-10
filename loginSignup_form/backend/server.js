const express = require("express");
const app = express();  //creating the server where app is the server
app.use(express.json()); //converts the json data to js object
//tell the location of the fronend files
app.use(express.static("public"));
let users = []; //temporary db

//signup
app.post("/signup",(req,res)=>{         //creates API endpoint
    const {username,password}= req.body;    //extracts username and password from req
    users.push({username,password});        //stores the details in array
    res.json({message:"user created"});
});

//Login
app.post("/login",(req,res)=>{
    const{username,password} = req.body;
    //finds the user and compares the details
    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        res.json({success: true});

    }else{
        res.json({success: false});
    }
});

//starting the server
app.listen(3000,()=>{
    console.log("server running on port 3000");
})

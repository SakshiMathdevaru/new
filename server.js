const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(8081);
console.log("server is listening on port 8081");

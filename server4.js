import express from "express";
import {MongoClient} from "mongodb";
var app=express();
app.listen(8082,function(){
    console.log("Server started on port 8080");

});
app.get("/users",function(req,res){
    const users={name:"John"};
    res.json(users);
});
app.get("/posts",function(req,res){
    const posts={postId:1};
    res.json(posts);
});
app.get("/employees", async function(req,res){

const client=new MongoClient("mongodb://127.0.0.1:27017")
const db=client.db("office-db")
await db.collection("employees").insertOne({name:"John"})
const employees=await db.collection("employees").find().toArray()
res.json(employees);
});
import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020")
const db = client.db("office-db")
await db.collection("emp").insertOne({name:"Jack"})
const employees = await db.collection("emp").find().toArray() //incase of removing await promise { <pending> } will appear incase of data
console.log(employees)
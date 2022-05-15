const express = require('express')
const res = require('express/lib/response')
const app=express()
const port=3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kyoungmin:hb147852@nodejs.uvour.mongodb.net/nodeJS?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1 })

client.connect(
  console.log('MongoDB Connected'),  
  err => {
  const collection = client.db("nodeJS").collection("devices");
  // perform actions on the collection object
  // client.close();
})

app.get('/',(req,res)=> res.send('Hello world'))

app.listen(port, ()=>console.log(`Example app listenening on port ${port}!`))



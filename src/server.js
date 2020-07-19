require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { GraphQLServer } = require('graphql-yoga');
const axios = require('axios');

const displayUsers = require("./views/Home")
const resolvers = require('./resolvers');

const app = express();

mongoose.connect(`mongodb+srv://admin-feko:${process.env.DB_PASSWORD}@cluster0-dxzls.gcp.mongodb.net/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.start();

app.listen('1337',()=>{
  console.log("server started on port 1337")
});

app.get('/', async (req,res)=> {
  const response = await axios.post('http://localhost:4000', {
    "query": "{users{name}}"
  })
  const users = response.data.data.users
  res.send(displayUsers({users}))
});
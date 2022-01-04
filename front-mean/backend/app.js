const secrets = require ('../../secure/secrets')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Post = require('./models/post')

const app = express()
mongoose.connect(secrets.connectPath)
  .then(()=>{
    console.log('Connected to the mongo Database')
  })
  .catch(()=>{
    console.log('Could not connect to mongo Database')
  })

app.use(bodyParser.json())

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  )
  next()
})

app.post('/api/posts',(req, res, next) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  })
  newPost.save()
  res.status(201).json({'message': 'verily, I say to you, a new posts has been added'})
})

app.get('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: "jkb23tygdads",
      title: "Post number one",
      content: "This comes from a server, not the db"
    },
    {
      id: "7bhjcbhcvvcx",
      title: "post next two",
      content: "Still just server dummy data right now"
    }
  ]
  res.status(200).json({
    message: "dummy data returned",
    posts: posts
  }
  );
})

module.exports = app;

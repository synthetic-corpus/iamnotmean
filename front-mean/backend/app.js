const express = require('express')

const app = express()

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

app.use('/api/posts',(req, res, next) => {
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

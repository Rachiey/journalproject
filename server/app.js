const postData = require('../posts.json');
const Post = require('./model');

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//GET
//gets all posts
app.get("/posts", (req, res) => {
    res.send({all: postData});
})

//gets specific post
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    res.send(postData[id-1]);
})


//POST
//adds new post
app.post("/posts", (req, res) => {
    Post.addNewPost(req.body);
    res.statusCode = 201;
    res.send(Post.all);
})

//adds new comment


//UPDATE
//adds reaction

module.exports = app;
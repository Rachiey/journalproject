const postData = require('../posts.json');

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

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

module.exports = app;
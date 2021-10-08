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

//gets all comments for a specific post
app.get("/posts/comments/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        //handles invalid id number
        if(id > Post.all.length) {
            throw new Error("Comments not found");
        }

        const post = Post.getPost(id);
        res.send(post.comments);
    }
    catch(err) {
        res.statusCode = 404;
        res.send(err.message)
    }   
});

//gets all reactions for a specific post
app.get("/posts/reactions/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        //handles invalid id number
        if(id > Post.all.length) {
            throw new Error("Reactions not found");
        }

        const post = Post.getPost(id);
        res.send(post.reactions);
    }
    catch(err) {
        res.statusCode = 404;
        res.send(err.message)
    }   
});

//gets posts based on category
app.get("/:word", (req, res) => {
    try {
        const word =req.params.word.toLowerCase();
        const matchedPosts = Post.all.filter(post => (post.category.toLowerCase()===word));
        res.send({all :matchedPosts});
    }
    catch(err) {
        res.statusCode = 404;
        res.send(err.message)
    }   
});


//POST
//adds new post
app.post("/posts", (req, res) => {
    Post.addNewPost(req.body);
    res.statusCode = 201;
    res.send(Post.all);
})

//adds new comment
app.post("/posts/comments/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const newComment = req.body.comment;

        //makes sure the post exists (so the user can actually comment on it)
        if(id > Post.all.length) {
            throw new Error("Post not found");
        }
        
        Post.addNewComment(id, newComment);
        const updatedPost = Post.getPost(id);
        res.statusCode = 201;
        res.send(updatedPost);
    }
    catch(err) {
        res.statusCode = 404;
        res.send(err.message);
    }
})

//UPDATE
//adds new reaction
app.put("/posts/reactions/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const newReaction = req.body.reaction;

        console.log(newReaction);

        //makes sure the post exists (so the user can actually react to it)
        if(id > Post.all.length) {
            throw new Error("Post not found");
        }

        Post.addNewReaction(id, newReaction);
        res.send("Updated post");
    }
    catch(err) {
        res.status = 404;
        res.send(err.message);
    }
})


module.exports = app;
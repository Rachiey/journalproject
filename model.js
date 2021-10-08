const postData = require("./posts.json");
const { post } = require("./app");

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.location = data.location;
        this.category = data.category;
        this.post = data.post;
        this.gif = data.gif;
        this.comments = [];
        this.reactions = {smile: 0, laugh: 0, love: 0}
    }

    //get all posts
    static get all() {
        return postData;
    }

    //get specific post
    static getPost(id) {
        const posts = Post.all;
        const specificPost = posts.filter(post => post.id === id);
        return specificPost[0];
    }

    //add new post
    static addNewPost(data) {
        const id = postData.length + 1;
        const newPost = new Post({
            id: id, ...data
        });
        postData.push(newPost);
        return Post.all;
    }

    //add new comment to a post
    static addNewComment(id, comment) {
        const targetPost = Post.getPost(id);
        targetPost.comments.push(comment);
    }


    //add a new reaction
    static addNewReaction(id, targetReaction) {
        const targetPost = Post.getPost(id);
        targetPost.reactions[targetReaction]++;
    }
};

module.exports = Post;
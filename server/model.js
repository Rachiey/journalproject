const postData = require("../posts.json");
const { post } = require("./app");

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title
        this.location = data.location;
        this.post = data.post;
        this.gif = data.gif;
        this.comments = [];
        this.reactions = {smile: 0, laugh: 0, love: 0}
    }

    static get all() {
        return postData;
    }

    static addNewPost(data) {
        const id = postData.length + 1;
        const newPost = new Post({id: id, ...data});
        postData.push(newPost);
        return Post.all;
    }
};

module.exports = Post;
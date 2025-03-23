const Post = require("../models/Post");

const createPost = async (req, res) => {
    try {
        const { imageUrl, caption } = req.body;
        const newPost = new Post({ user: req.user.id, imageUrl, caption });
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "username profilePic").sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (!post.likes.includes(req.user.id)) {
            post.likes.push(req.user.id);
        } else {
            post.likes = post.likes.filter(id => id.toString() !== req.user.id.toString());
        }

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const commentOnPost = async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const comment = { user: req.user.id, text, createdAt: new Date() };
        post.comments.push(comment);

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createPost, getPosts, likePost, commentOnPost };

import express from "express";
import User from "../models/user.js";
import Post from "../models/post.js"; // ✅ You forgot to import the Post model
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create a post
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { caption, imageUrl } = req.body;
        const newPost = new Post({
            user: req.user.id,
            caption,
            imageUrl,
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error); // Helpful for debugging
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("user", "username profilePic")
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Like/unlike a post
router.post("/:id/like", authMiddleware, async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id); // ✅ Changed variable name to avoid shadowing
        if (!foundPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        const userId = req.user.id;
        const alreadyLiked = foundPost.likes.includes(userId);

        if (alreadyLiked) {
            // Remove like
            foundPost.likes = foundPost.likes.filter(id => id.toString() !== userId);
        } else {
            // Add like
            foundPost.likes.push(userId);
        }

        await foundPost.save();
        res.json(foundPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Comment on a post
router.post("/:id/comment", authMiddleware, async (req, res) => {
    try {
        const { text } = req.body;
        const foundPost = await Post.findById(req.params.id);

        if (!foundPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        foundPost.comments.push({
            user: req.user.id,
            text,
            createdAt: new Date()
        });

        await foundPost.save();
        res.json(foundPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;

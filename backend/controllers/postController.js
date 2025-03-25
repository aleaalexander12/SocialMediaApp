import Post from "../models/post";

// Create Post
exports.createPost = async (req, res) => {
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
        res.status(500).json({ message: "Server error" });
    }
};

// Get All Posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("user", "username profilePic").sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Like a Post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.likes.includes(req.user.id)) {
            post.likes = post.likes.filter(id => id.toString() !== req.user.id.toString());
        } else {
            post.likes.push(req.user.id);
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Comment on a Post
exports.commentOnPost = async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        const comment = { user: req.user.id, text, createdAt: new Date() };
        post.comments.push(comment);

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

import User from ("../models/user");

// Get User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Follow a User
exports.followUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (!user || !currentUser) return res.status(404).json({ message: "User not found" });
        if (currentUser.following.includes(user._id)) return res.status(400).json({ message: "Already following" });

        currentUser.following.push(user._id);
        user.followers.push(currentUser._id);

        await currentUser.save();
        await user.save();

        res.status(200).json({ message: "Followed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Unfollow a User
exports.unfollowUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (!user || !currentUser) return res.status(404).json({ message: "User not found" });
        if (!currentUser.following.includes(user._id)) return res.status(400).json({ message: "Not following this user" });

        currentUser.following = currentUser.following.filter(id => id.toString() !== user._id.toString());
        user.followers = user.followers.filter(id => id.toString() !== currentUser._id.toString());

        await currentUser.save();
        await user.save();

        res.status(200).json({ message: "Unfollowed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

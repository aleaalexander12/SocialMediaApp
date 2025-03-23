const User = require("../models/User");

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (!userToFollow || !currentUser) return res.status(404).json({ message: "User not found" });

        if (!currentUser.following.includes(userToFollow._id)) {
            currentUser.following.push(userToFollow._id);
            userToFollow.followers.push(currentUser._id);
            await currentUser.save();
            await userToFollow.save();
        }

        res.json({ message: "User followed" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

const unfollowUser = async (req, res) => {
    try {
        const userToUnfollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (!userToUnfollow || !currentUser) return res.status(404).json({ message: "User not found" });

        currentUser.following = currentUser.following.filter(id => id.toString() !== userToUnfollow._id.toString());
        userToUnfollow.followers = userToUnfollow.followers.filter(id => id.toString() !== currentUser._id.toString());

        await currentUser.save();
        await userToUnfollow.save();

        res.json({ message: "User unfollowed" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getUserProfile, followUser, unfollowUser };

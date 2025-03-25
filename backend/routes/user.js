import express from "express";
import User from "../models/user.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();





// Create User
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// Get user profile
router.get("/:user", async (req, res) => {
  try {
    const user = await user.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Follow a user
router.post("/:id/follow", authMiddleware, async (req, res) => {
  try {
    const userToFollow = await user.findById(req.params.id);
    const currentUser = await user.findById(req.user.id);

    if (!userToFollow || !currentUser)
      return res.status(404).json({ message: "User not found" });

    if (!currentUser.following.includes(userToFollow._id)) {
      currentUser.following.push(userToFollow._id);
      userToFollow.followers.push(currentUser._id);
      await currentUser.save();
      await userToFollow.save();
    }

    res.json({ message: "User followed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Unfollow a user
router.post("/:id/unfollow", authMiddleware, async (req, res) => {
  try {
    const userToUnfollow = await user.findById(req.params.id);
    const currentUser = await user.findById(req.user.id);

    if (!userToUnfollow || !currentUser)
      return res.status(404).json({ message: "User not found" });

    currentUser.following = currentUser.following.filter(
      (id) => id.toString() !== userToUnfollow._id.toString()
    );
    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== currentUser._id.toString()
    );

    await currentUser.save();
    await userToUnfollow.save();

    res.json({ message: "User unfollowed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

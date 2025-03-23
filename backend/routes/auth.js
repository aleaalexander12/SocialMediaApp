import express from "express";
const router = express.Router();

// Define authentication routes
router.post("/login", (req, res) => {
    res.send("Login route");
});

export default router; // Ensure this line is present

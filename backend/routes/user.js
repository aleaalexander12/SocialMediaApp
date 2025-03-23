import express from "express";
const router = express.Router();

// Example user route
router.get("/", (req, res) => {
    res.send("User route working!");
});

export default router; // This ensures a default export

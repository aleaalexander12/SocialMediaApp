import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: { type: String, required: true },
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });  

export default mongoose.model("Post", postSchema);

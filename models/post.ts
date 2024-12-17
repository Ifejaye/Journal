import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    input1: {type: String, required: true},
    input2: {type: String, required: true},
    location: {type: String, required: false},
    // date: {type: Date, default: Date.now} 
}, {timestamps: true})




const Post = mongoose.model("Post", postSchema);
export default Post;
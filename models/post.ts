import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    contentType: {type: String, required: true},
    content: {type: String, required: true},
    location: {type: String, required: false},
    displayedDate:{
        month:{type: String, required: false},
        day:{type: Number,   required: false },
        year:{type: Number,  required: false },
        time:{type: String,  required: false },
    }
}, {timestamps: true})




const Post = mongoose.model("Post", postSchema);
export default Post;
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

///convert schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

//now we can export the model which we can run command like edit,delete,update
export default PostMessage;

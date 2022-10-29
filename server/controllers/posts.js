import PostMessage from "../models/postMessage.js";

//here actual code is written
//index.js=>[routes].posts.js=>[controller].posts
//this is how data is passing
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  //getting request from the form front end
  const post = req.body;

  // checking data from the schema
  const newPost = new PostMessage(post);
  try {
    //adding to db
    await newPost.save();
    res.save(201).json(newPost);
  } catch (error) {
    res.save(409).json({ message: error.message });
  }
};

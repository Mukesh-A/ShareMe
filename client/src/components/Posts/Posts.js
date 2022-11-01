import React from "react";
//to get data use selectors
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = () => {
  const classes = useStyles();
  //accessing the redux store
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <>
      <h1>posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

import React from "react";
//to get data use selectors
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
const Posts = ({ setcurrentId }) => {
  const classes = useStyles();
  //accessing the redux store
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    //if post.length is 0 then display circular progress if its smthing >0 then display grid
    !posts.length ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} setcurrentId={setcurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;

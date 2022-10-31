export default reducer = (post = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return post;
    case "CREATE":
      return post;
    default:
      return post;
  }
};

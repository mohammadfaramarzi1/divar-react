const filterPostByCategory = (posts, categoryId) => {
  const filteredPosts = posts.data.posts.filter(
    (post) => post.category === categoryId
  );
  return filteredPosts;
};

export default filterPostByCategory;

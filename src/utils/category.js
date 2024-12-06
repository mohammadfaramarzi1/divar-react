const filterPostByCategory = (posts, category) => {
  if (!category) return posts;

  const filteredPosts = posts.data.posts.filter(
    (post) => post.category === category
  );
  return filteredPosts;
};

export default filterPostByCategory;

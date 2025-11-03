export const getCommentsCount = (postId, comments = []) => {
  const postComment = comments.filter(({ postId: commentPostId }) => commentPostId === postId);

  return postComment.length;
};

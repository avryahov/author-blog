import { getComments, getPosts } from "../api";

import { getCommentsCount } from "../utils";

export const fetchPosts = async (searchPhrase, page, limit) => {
  const [{ posts, count }, comments] = await Promise.all([
    getPosts(searchPhrase, page, limit),
    getComments(),
  ]);

  return {
    error: null,
    res: {
      posts: posts.map((post) => ({
        ...post,
        commentsCount: getCommentsCount(post.id, comments),
      })),
      count: Math.ceil(count / limit),
    },
  };
};

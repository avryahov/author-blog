/* eslint-disable no-console */
import axios from 'axios';
import { transformPost } from '../transformer';

const postsUrl = 'http://localhost:3005/posts';

export const getPosts = async (searchPhrase, page, limit) => {
  try {
    const response = await axios.get(postsUrl);
    let allPosts = response.data.map(transformPost);

    if (searchPhrase) {
      const term = searchPhrase.trim().toLowerCase();
      allPosts = allPosts.filter(post => post.title.toLowerCase().includes(term));
    }

    const totalCount = allPosts.length;
    const startIndex = (page - 1) * limit;
    const paginatedPosts = allPosts.slice(startIndex, startIndex + limit);

    return {
      posts: paginatedPosts,
      count: totalCount,
    };
  } catch (error) {
    console.error('Ошибка загрузки постов:', error);

    return { posts: [], count: 0 };
  }
};

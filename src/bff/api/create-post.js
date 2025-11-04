import axios from 'axios';
import { generatedDate } from '../utils';

const url = 'http://localhost:3005/posts';

const getAllPosts = async () => {
  const response = await axios.get(url);

  return response.data;
};

export const createPost = async ({ imageUrl, title, content }) => {
  const allPosts = await getAllPosts();

  let maxId;

  if (allPosts.length > 0) {
    maxId = Math.max(
      ...allPosts.map(post => {
        const num = parseInt(post.id, 10);

        return isNaN(num) ? 0 : num;
      })
    );
  } else {
    maxId = 0;
  }

  const newId = String(maxId + 1).padStart(3, '0');

  const response = await axios.post(url, {
    id: newId,
    image_url: imageUrl,
    published_at: generatedDate(),
    title,
    content,
  });

  return response.data;
};

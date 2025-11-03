import { ACTION_TYPE } from '../constant';

const initialPostsState = {};

export const postsReducer = (state = initialPostsState, action) => {
  if (action.type === ACTION_TYPE.SET_POST_DATA) {
    return { ...state, ...action.payload };
  }

  return state;
};

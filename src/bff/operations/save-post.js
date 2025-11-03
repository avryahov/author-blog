import { ROLE } from "../../constant";
import { createPost, updatePost } from "../api";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  const savedPost =
    newPostData.id === ""
      ? await createPost(newPostData)
      : await updatePost(newPostData);

  return {
    res: savedPost,
    error: null,
  };
};

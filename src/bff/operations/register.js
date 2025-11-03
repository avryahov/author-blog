import { createUser, getUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
  const user = await getUser(regLogin);

  if (user) {
    return {
      res: null,
      error: 'Такой логин уже существует',
    };
  }

  const createdUser = await createUser(regLogin, regPassword);
  const session = sessions.create(createdUser);

  return {
    res: {
      id: createdUser.id,
      login: createdUser.login,
      roleId: createdUser.role_id,
      session,
    },
    error: null,
  };
};

import axios from 'axios';

import { generatedDate } from '../utils';

const usersUrl = 'http://localhost:3005/users';

export const createUser = (regLogin, regPassword) =>
  axios
    .post(usersUrl, {
      login: regLogin,
      password: regPassword,
      role_id: 2,
      registered_at: generatedDate(),
    })
    .then(response => response.data);

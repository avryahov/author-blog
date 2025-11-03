import { createSession } from '../sessions';

let mockUsers = [
  { id: '001', login: 'admin', password: 'admin123', role_id: 0 },
  { id: '002', login: 'admin2', password: 'admin1', role_id: 1 },
  { id: '003', login: 'ivan', password: 'admin1', role_id: 2 },
];

export const register = (login, password) => {
  if (mockUsers.some(u => u.login === login)) {
    return { error: 'Пользователь с таким логином уже существует' };
  }

  const newUser = {
    id: String(mockUsers.length + 1).padStart(3, '0'),
    login: login,
    password: password,
    role_id: 2,
    registered_at: new Date().toISOString().split('T')[0],
  };

  mockUsers.push(newUser);

  const session = createSession({
    id: newUser.id,
    login: newUser.login,
    roleId: newUser.role_id,
  });

  return {
    res: {
      id: newUser.id,
      login: newUser.login,
      roleId: newUser.role_id,
      session,
    },
  };
};

import { createSession } from '../sessions';

const mockUsers = [
  { id: '001', login: 'admin', password: 'admin123', role_id: 0 },
  { id: '002', login: 'admin2', password: 'admin1', role_id: 1 },
  { id: '003', login: 'ivan', password: 'admin1', role_id: 2 },
];

export const authorize = (login, password) => {
  const user = mockUsers.find(u => u.login === login && u.password === password);

  if (!user) {
    return { error: 'Пользователь не найден или неверный пароль' };
  }

  const session = createSession({
    id: user.id,
    login: user.login,
    roleId: user.role_id,
  });

  return {
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session,
    },
  };
};

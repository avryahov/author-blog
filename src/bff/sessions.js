const sessions = new Map();

export const createSession = user => {
  const hash = 'sess_' + Math.random().toString(36).substring(2, 15);
  sessions.set(hash, { user, createdAt: Date.now() });

  return hash;
};

export const getSession = hash => {
  return sessions.get(hash);
};

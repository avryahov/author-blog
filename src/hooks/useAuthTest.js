import { authorize } from '../bff';

export const useAuthTest = () => {
  return (login, password) => authorize(login, password);
};

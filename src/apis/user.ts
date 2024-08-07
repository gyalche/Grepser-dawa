import { API } from '../axios';

export const getUsers = async () => {
  try {
    const res = await API.get('/users');
    return res.data;
  } catch (error: any) {
    return error.message;
  }
};

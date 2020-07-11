import axios from 'axios';
import { UserSubmit, UserResponse } from './interface';

export const api = axios.create({
  baseURL: 'https://conduit.productionready.io/api'
});

export function setJWT(jwt: string) {
  api.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

export function clearJWT() {
  delete api.defaults.headers.common['Authorization'];
}

export async function loginUser(
  user: UserSubmit
): Promise<UserResponse | undefined> {
  try {
    const response = await api.post('/users/login', {
      user
    });

    return response.data as UserResponse;
  } catch (err) {
    console.error(err);
  }
}

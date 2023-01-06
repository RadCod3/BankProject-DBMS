import axios from 'axios';
import { HOST } from './config';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(credentials) {
  try {
    if (credentials.role === 'customer') {
      const response = await axios.post(`${HOST}/login/customer`, credentials);
      if (response.data.auth === 'success') {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenExpiration', Date.now() + 900000);
        localStorage.setItem('role', response.data.role);
        return response.data;
      } else {
        return await Promise.reject(response.data.message);
      }
    } else if (credentials.role === 'employee') {
      const response = await axios.post(`${HOST}/login/employee`, credentials);
      if (response.data.auth === 'success') {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('tokenExpiration', Date.now() + 900000);
        localStorage.setItem('role', response.data.role);
        return response.data;
      } else {
        return await Promise.reject(response.data.message);
      }
    }
  } catch (error) {
    return await Promise.reject('Login Error: ', error);
  }
}

export async function customerLogout() {
  try {
    localStorage.removeItem('token');
    return await Promise.resolve('Logout Successful');
  } catch (error) {
    return await Promise.reject('Logout Error: ', error);
  }
}

export function customerLoggedIn() {
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');
  const tokenExpiration = localStorage.getItem('tokenExpiration');
  if (role !== 'customer') {
    console.log('Role is not customer');
    return false;
  }

  if (!token) {
    console.log('No token');
    return false;
  }

  if (Date.now() > tokenExpiration) {
    console.log('Token expired');
    return false;
  }

  return true;
}

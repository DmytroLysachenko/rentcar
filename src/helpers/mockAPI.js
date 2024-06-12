import axios from 'axios';

export const mockAPI = axios.create({
  baseURL: 'https://6666aaa4a2f8516ff7a44e31.mockapi.io/rentcar',
});

export const limitForFirstPage = 12;

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: string) => baseInstance.get(url),
  delete: (url: string) => baseInstance.delete(url),
  post: (url: string, data: { title: string }) => baseInstance.post(url, data),
  search: (url: string) => baseInstance.get(url),
};

export default apiRequest;

import axios from 'axios';
import store from '../../store';

const ApiService = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 5000,
});

ApiService.interceptors.request.use(async (config) => {
  const { access_token } = store.getState().auth;

  if (access_token !== null) {
      // @ts-ignore
      config.headers.Authorization = `${access_token}`;
      // @ts-ignore
      console.debug('[Request]', config.baseURL + config.url, JSON.stringify(access_token));
  }
  return config;
});

export function fetcher<T = any>(url: string) {
  return ApiService.get<T>(url).then((res) => res.data);
}

export default ApiService;

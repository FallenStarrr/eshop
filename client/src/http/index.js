import axios from "axios";

const $host = axios.create({
  baseUrl: 'http://localhost:3000/'
});

const $authHost = axios.create({
  baseUrl:  'http://localhost:3000/'
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };

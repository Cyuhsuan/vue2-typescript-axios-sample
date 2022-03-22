import axios, { AxiosRequestConfig } from "axios";
import store from "@/store/index";
import router from "@/router/index";

const service = axios.create({
  baseURL: "http://127.0.0.1:9092/api",
  headers: {
    "Content-type": "application/json",
  },
});

// http request 請求攔截器，有token值則配置上token值
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (store.state.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.state.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http response 伺服器響應攔截器，這裡攔截401錯誤，並重新跳入登頁重新獲取token
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.dispatch("DELETE_USER_INFO");
          router.push({
            path: "/",
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);

class Ajax {
  get(url: string, data: object | null = null) {
    return service.get(url, { params: data });
  }
  post(url: string, data: object) {
    return service.post(url, data);
  }
  put(url: string, data: object) {
    return service.put(url, data);
  }
  delete(url: string, id: string) {
    return service.delete(`${url}/${id}`);
  }
}
export default new Ajax();

import axios from "axios";
const service = axios.create({
  baseURL: "http://127.0.0.1:9092/api",
  headers: {
    "Content-type": "application/json",
  },
});

// // http request 請求攔截器，有token值則配置上token值
// axios.interceptors.request.use(
//   config => {
//     // if (store.state.token) {
//     //   config.headers.Authorization = `Bearer ${store.state.token}`;
//     //   config.headers.common["Accept"] = "application/json";
//     // }
//     // return config;
//   },
//   error => {
//     return Promise.reject(error);
//   });

// // http response 伺服器響應攔截器，這裡攔截401錯誤，並重新跳入登頁重新獲取token
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     // if (error.response) {
//     //   switch (error.response.status) {
//     //     case 401:
//     //       store.dispatch('DELETE_USER_INFO');
//     //       router.push({
//     //         path: "/",
//     //       });
//     //       break;
//     //   }
//     // }
//     return Promise.reject(error)
//   });

class Ajax {
  get(url: string, data: object) {
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

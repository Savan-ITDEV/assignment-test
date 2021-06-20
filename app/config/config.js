import axios from "axios";

import join from "url-join";
export const data = {
  Product_name: "MacBook - Apple M1 Gen {{i}}",
  product_path:
    "https://cdn.alzashop.com/Foto/LegendFoto/photos/NL244a1b_2.jpg",
  price: "1{{i}}.000.000 KIP",
};
export const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

var apiUrl = "https://60cdbb8991cc8e00178dbd7d.mockapi.io/api/";
axios.interceptors.request.use(
  (config) => {
    config.headers.genericKey = "droppixTest123456789";
    config.url = join(apiUrl, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      alert("You are not authorized");
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);
export const httpClient = axios;

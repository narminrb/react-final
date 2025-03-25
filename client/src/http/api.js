// import axios, { Axios } from 'axios'

// const AxiosInstance = axios.create({
//     baseURL: 'http://localhost:1337/',
//     timeout: 1000,
   
// })

// export const getApiData = async(url, ...config) => {
//     return ()=>  AxiosInstance.get(url, ...config).then((res) => res.data)
// }

import axios, { Axios } from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/api/",
  timeout: 1000,
});

export const getAPiData = async (url, config = {}) => {
  try {
    const response = await AxiosInstance.get(url, config);
    return response?.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};

export const postApiData = async (url, payload) => {
  try {
    const response = await AxiosInstance.post(url, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const LoginOrRegister = (url, payload) => {
//   return AxiosInstance.post(url, payload).then((response) => {
//     return response.data;
//   });
// };

// export const LoginOrRegister = async (type, payload) => {
//   try {
//     let url = "";
//     if (type === "register") {
//       url = "auth/local/register"; // Register endpoint
//     } else if (type === "signin") {
//       url = "auth/local"; // Login endpoint
//     } else {
//       throw new Error("Invalid type. Use 'register' or 'signin'.");
//     }

//     const response = await AxiosInstance.post(url, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Auth Error:", error.response?.data || error.message);
//     throw error;
//   }
// };
export const LoginOrRegister = (url, payload) => {
  return AxiosInstance.post(`/auth/local/${url}`, payload) 
    .then((response) => response.data)
    .catch((error) => {
      console.error("Auth Error:", error.response?.data || error.message);
      throw error;
    });
};


export const LoginOr2Register = (url, payload) => {
  return AxiosInstance.post(`/auth/local`, payload) 
    .then((response) => response.data)
    .catch((error) => {
      console.error("Auth Error:", error.response?.data || error.message);
      throw error;
    });
};

export const getAPi = (url, options) => {
  return AxiosInstance.get(url, {
    ...options,
  }).then((response) => {
    return response.data;
  });
};

// AxiosInstance.interceptors.request.use((config) => {
//   const userData = JSON.parse(localStorage.getItem("auth__store"));
//   const token = userData?.state?.user.token;
//   if (token) {
//     config.headers.Authorization = token;
//   } else {
//     window.location.reload();
//   }
// });
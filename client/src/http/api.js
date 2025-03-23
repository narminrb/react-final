// import axios, { Axios } from 'axios'

// const AxiosInstance = axios.create({
//     baseURL: 'http://localhost:1337/',
//     timeout: 1000,
   
// })

// export const getApiData = async(url, ...config) => {
//     return ()=>  AxiosInstance.get(url, ...config).then((res) => res.data)
// }

import axios from "axios";

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
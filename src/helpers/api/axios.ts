import Axios from 'axios';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const configTemp = { ...config };
    if (configTemp.headers) {
      // const assessToken = store.getState().auth.accessToken;
      // configTemp.headers.Authorization = `Bearer ${assessToken}`;
      // configTemp.headers['User-Role'] = getUseRoleByHostName();
    }
    return configTemp;
  },
  (error: any) => {
    return error;
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // system error

    return Promise.reject(error);
  }
);

export const sendGet = (url: string, params?: any) => axiosInstance.get(url, { params }).then((res: any) => res.data);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  axiosInstance
    .post(url, params, { params: queryParams })
    .then((res: any) => res.data)
    .catch((err: any) => err);
export const sendPut = (url: string, params?: any) => axiosInstance.put(url, params).then((res: any) => res.data);
export const sendPatch = (url: string, params?: any) => axiosInstance.patch(url, params).then((res: any) => res.data);
export const sendDelete = (url: string, params?: any) =>
  axiosInstance.delete(url, { params }).then((res: any) => res.data);

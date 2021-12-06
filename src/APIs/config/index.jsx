import axios from 'axios';

import { Globals, Lang } from '../../utils';
// import { StatusCodes } from "../../utils/Enums/common";

const Axios = axios.create({
  baseURL: Globals.BASE_URL,
  // withCredentials: true,
});

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.common['Accept-Language'] = Lang.CurrentLanguage;

// Axios.interceptors.response.use(null, error => {
//   const unauthorized = error.response && error.response.status === StatusCodes.Unauthorized;
//   if (unauthorized) window.location = Globals.LANDAING_URL;
//   return Promise.reject(error.response);
// });

export default {
  get: Axios.get,
  put: Axios.put,
  post: Axios.post,
  delete: Axios.delete,
  patch: Axios.patch,
};

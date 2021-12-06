import axio from './index';

const get = (url, config) => ({
  type: '',
  payload: {
    ...{
      api: () => axio.get(url),
      table: '',
      AlwaysUpdated: true,
    },
    ...config,
  },
});

const post = (url, data, config) => ({
  type: '',
  payload: {
    ...{
      api: () => axio.post(url, data),
      table: '',
      AlwaysUpdated: true,
    },
    ...config,
  },
});
const delet = (url, config) => ({
  type: '',
  payload: {
    ...{
      api: () => axio.delete(url),
      table: '',
      AlwaysUpdated: true,
    },
    ...config,
  },
});
const put = (url, data, config) => ({
  type: '',
  payload: {
    ...{
      api: () => axio.put(url, data),
      table: '',
      AlwaysUpdated: true,
    },
    ...config,
  },
});
const patch = (url, data, config) => ({
  type: '',
  payload: {
    ...{
      api: () => axio.patch(url, data),
      table: '',
      AlwaysUpdated: true,
    },
    ...config,
  },
});

export default {
  get,
  post,
  delete: delet,
  put,
  patch,
};

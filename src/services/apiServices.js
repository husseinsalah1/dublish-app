import axiosInstance from "./api";

const errorHandler = async (method, url, options = {}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axiosInstance({ method, url, ...options });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// General API service
const ApiService = {
  get: (url, params = {}) => errorHandler("get", url, { params }),
  post: (url, data) => errorHandler("post", url, { data }),
  put: (url, data) => errorHandler("put", url, { data }),
  delete: (url) => errorHandler("delete", url),
};

export default ApiService;

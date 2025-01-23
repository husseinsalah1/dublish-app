import { useState } from "react";
import axiosInstance from "@services/api";

const usePOST = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async ({ url, payload }) => {
    let errorData = null;
    try {
      setLoading(true);
      const response = await axiosInstance.post(url, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
      errorData = err.response?.data || { message: err.message };
      setError(errorData);
    } finally {
      setLoading(false);
    }

    return { data: data, error: errorData };
  };
  return { response: data, loading, error, postData };
};

export default usePOST;

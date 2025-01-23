import { useState } from "react";
import axiosInstance from "@services/api";

const usePUT = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async ({ url, payload }) => {
    let response;
    try {
      setLoading(true);
      response = await axiosInstance.put(url, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    console.log("PUT Response:", response.data);
    console.log("PUT Response:", error);
    return { data: response.data, error };
  };
  return { response: data, loading, error, putData };
};

export default usePUT;

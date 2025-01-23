import { useState } from "react";
import axiosInstance from "@services/api";

const useDELETE = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async ({ url }) => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

    return { data, loading, error };
  };

  return { deleteData };
};

export default useDELETE;

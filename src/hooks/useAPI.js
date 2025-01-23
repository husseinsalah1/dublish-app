import { useState, useCallback } from "react";
import axiosInstance from "./../services/api";

const useApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = useCallback(
    async ({ method, url, data = null, params = null }) => {
      setLoading(true);
      setError(null); // Reset error state before each call
      setResponse(null); // Reset response state before each call

      try {
        let result;

        if (method === "GET") {
          result = await axiosInstance.get(url, { params });
        } else if (method === "POST") {
          result = await axiosInstance.post(url, data);
        } else if (method === "PUT") {
          result = await axiosInstance.put(url, data);
        } else if (method === "DELETE") {
          result = await axiosInstance.delete(url, { data });
        }

        setResponse(result.data); // Update state with the response data
        return { data: result.data, error: null }; // Return success response
      } catch (err) {
        const errorData = err.response?.data || { message: err.message };
        setError(errorData); // Update state with the error data
        return { data: null, error: errorData }; // Return error response
      } finally {
        setLoading(false); // Ensure loading is set to false in all cases
      }
    },
    []
  );

  return { response, loading, error, callApi };
};

export default useApi;

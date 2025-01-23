import { useState } from "react";
import axiosInstance from "@services/api";

const useGET = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    pageNo: 1,
  });

  const fetchData = async ({ url, params }) => {
    try {
      setLoading(true);
      const result = await axiosInstance.get(url, { params });
      setData(result.data);
      setCount(result.data.count);
      const pageNo = Math.ceil(result?.data?.count / pagination?.limit);
      setPagination((prev) => ({ ...prev, pageNo: pageNo + 1 }));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { response: data, loading, error, fetchData, count };
};

export default useGET;

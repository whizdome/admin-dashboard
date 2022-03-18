import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const res = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const resolver = async ({ path, params }) => {
    try {
      dispatch(path(params));
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onClick = async () => {
    resolver(axiosParams);
  };

  return { response, error, loading, onClick };
};

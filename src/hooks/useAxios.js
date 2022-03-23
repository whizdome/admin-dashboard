import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useAxios = ({ path, params, stateRes }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let isApiSubscribed = true;

  const res = useSelector((state) => state.loginRes);

  const dispatch = useDispatch();

  const resolver = async () => {
    setLoading(true);
    if (isApiSubscribed) {
      try {
        await dispatch(path(params));
        console.log("resolver", res);
      } catch (error) {
        console.log("err", error);
        setError(error);
      }
    }
  };

  const onClick = async () => {
    resolver();
  };

  // Cleanup function
  useEffect(() => {
    if (res?.status === 200) {
      setResponse(res);
      setLoading(false);
    }
    return () => {
      isApiSubscribed = false;
    };
  }, [res]);

  return { response, error, loading, onClick };
};

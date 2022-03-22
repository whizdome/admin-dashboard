import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AdminLogin } from "../redux/actions/authAct";

export const useAxios = ({ path, params, stateRes }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let isApiSubscribed = true;

  const res = useSelector((state) => {
    return state[stateRes];
  });

  const dispatch = useDispatch();

  const param = params === undefined ? null : params;
  const resolver = async () => {
    setLoading(true);
    if (isApiSubscribed) {
      try {
        path(param);
        console.log("resolver", res);
        setResponse(res);
        setLoading(false);
      } catch (error) {
        console.log("err", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const onClick = async () => {
    resolver();
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return { response, error, loading, onClick };
};

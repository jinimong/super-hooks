import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  const initialState = {
    loading: true,
    error: null,
    data: null,
  };
  const [state, setState] = useState(initialState);
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState(initialState);
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState((currentState) => ({
          ...currentState,
          loading: false,
          data,
        }));
      })
      .catch((error) => {
        setState((currentState) => ({
          ...currentState,
          loading: false,
          error,
        }));
      });
  }, [trigger]);
  return { ...state, refetch };
};

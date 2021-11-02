import {  useEffect } from "react";
import { setProgramData } from "../redux/programSlice";
import { setIsLoading } from "../redux/loadingSlice";
import {  useDispatch } from "react-redux";
import { setErrorData } from "../redux/errorSlice";

const useFetch = (url: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch(setProgramData(data));
        dispatch(setIsLoading(false));
      } catch (error) {
        dispatch(
          setErrorData("An unknown error occurred. Please try again later.")
        );
        dispatch(setIsLoading(false));
      }
    }, 3000);
  }, []);
};

export default useFetch;

import { AxiosResponse } from 'axios'
import { useState, useEffect } from "react";
import axiosInstance from './axiosInstance';

export function usePost(url: string, data: any) {
  const [status, setStatus] = useState<number | null>(500)

  useEffect(() => {
    axiosInstance
      .post(url, data)
      .then((response: AxiosResponse) => {
        setStatus(response.status);
        console.log(response.statusText)
      })
      .catch((error: Error) => console.error(`Error: ${error.message}`));
  }, [])

  return status;
}

export function useFetch(url: string): any {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get(url).then((response: AxiosResponse) => {
      setData(response.data);
    }).catch((error: Error) => {
      console.error(`Error: ${error.message}`);
    })
  }, []);

  return data;
}

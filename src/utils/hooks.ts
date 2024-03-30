import axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from "react";

export function usePost(url: string, data: any) {
  const [status, setStatus] = useState<number | null>(500)

  useEffect(() => {
    axios
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
    axios.get(url).then((response: AxiosResponse) => {
      setData(response.data);
    }).catch((error: Error) => {
      console.error(`Error: ${error.message}`);
    })
  }, []);

  return data;
}

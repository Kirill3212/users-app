import { useState, useEffect } from "react";
import { IUser, IComment } from "../types";

type Response = IUser | IComment;

export const useFetchData = (url: string) => {
  const [data, setData] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    // Задержка для демо лоудера
    const timerId = setTimeout(() => {
      const getUsers = async () => {
        try {
          const response = await fetch(url);

          if (response.status !== 200) {
            console.error(response.status);
            setError(true);
          }

          const data = await response.json();
          setIsLoading(false);
          setData(data);
        } catch (error) {
          setIsLoading(false);
          setError(true);
        }
      };

      getUsers();
    }, 1000);

    return () => clearInterval(timerId);
  }, [url]);

  return { data, isLoading, error };
};

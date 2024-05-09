import { useState, useEffect } from "react";
import { IUser } from "../types";

export const useFetchUsers = (url: string) => {
  const [users, setUsers] = useState<IUser[]>([]);
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
          setUsers(data);
        } catch (error) {
          setIsLoading(false);
          setError(true);
        }
      };

      getUsers();
    }, 1000);

    return () => clearInterval(timerId);
  }, [url]);

  return { users, isLoading, error };
};

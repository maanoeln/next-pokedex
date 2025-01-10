'use client';

import { useState, useEffect } from 'react';
import api from '../services/api';
import { AxiosError } from 'axios';

export function useFetchApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get<T>(endpoint);
        setData(response.data);
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          setError(
            `Error ${axiosError.response.status}: ${axiosError.response.data}`
          );
        } else if (axiosError.request) {
          setError('No response from the server. Please try again later.');
        } else {
          setError(axiosError.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
}

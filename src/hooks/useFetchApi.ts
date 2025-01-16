import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import api from '../services/api';
import { AxiosError } from 'axios';

interface IProps<T> {
  params?: { [key: string]: string };
  url: string;
  initialData?: T;
}

interface IUseFetchReturn<T> {
  isLoading: boolean;
  data: T;
  error: boolean;
  setData: Dispatch<SetStateAction<T>>;
  refetch: () => void;
}

export function useFetchApi<T>({
  url,
  params,
  initialData = {} as T,
}: IProps<T>): IUseFetchReturn<T> {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<boolean>(false);
  const [refetchController, setRefetchController] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getFn = () => (params ? api.get<T>(url, { params }) : api.get<T>(url));

  const refetch = useCallback(
    () => setRefetchController((current) => current + 1),
    []
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const handleGet = async () => {
      if (!!url) {
        try {
          const { data: fetchedData } = await getFn();
          if (!signal.aborted) {
            setData(fetchedData);
          }
        } catch (error: unknown) {
          const axiosError = error as AxiosError;

          if (axiosError.response) {
            setError(true);
          } else if (axiosError.request) {
            setError(true);
          } else {
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      }
    };

    handleGet();
  }, [url, refetchController]);

  return { data, error, isLoading, refetch, setData };
}

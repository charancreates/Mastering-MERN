import axios from "axios";
import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<T>(url);
        setState({ data: response.data, loading: false, error: null });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setState({
          data: null,
          loading: false,
          error: error.message,
        });
      }
    }
    fetchData();
  }, [url]);
  return state;
}

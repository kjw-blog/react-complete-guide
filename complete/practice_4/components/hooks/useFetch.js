import { useCallback, useState } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onFetch = useCallback(async (fetchOptions, dataHandler) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://react-http-f4305-default-rtdb.firebaseio.com/${fetchOptions.url}.json`,
        {
          method: fetchOptions.method ?? 'GET',
          headers: fetchOptions.headers ?? {},
          body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error('오류 발생');
      }

      const data = await response.json();

      dataHandler(data);
      setIsLoading(false);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }, []);

  return {
    error,
    isLoading,
    onFetch,
  };
};

export default useFetch;

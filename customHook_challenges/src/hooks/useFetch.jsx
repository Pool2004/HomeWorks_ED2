import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setHasError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, hasError };
}

export default useFetch;
import { useState, useEffect, useCallback } from 'react';

function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchUrl = useCallback(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
    // .catch((err) => setErrors(err));
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl]);

  return { data, loading };
}
export { useFetch };

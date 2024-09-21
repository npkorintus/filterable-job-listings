import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('useFetch called...')

  useEffect(() => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(response => {
        if (!response.ok) {
          // error coming back from server
          throw Error('could not fetch the data for that resource');
        }
        return response.json();
      })
      .then(data => {
        setTimeout(() => {
          setIsLoading(false);
          setData(data);
          setError(null);
        }, 1000);
      })
      .catch(err => {
        console.error(`Error: ${err}`)
        setTimeout(() => {
          setIsLoading(false);
          setError(err.message);
        }, 1000);
      })
  }, [url])

  return { data, isLoading, error };
}

export default useFetch;

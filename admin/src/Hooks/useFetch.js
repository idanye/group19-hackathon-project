import { useState, useEffect } from 'react';

// Custom hook to fetch data
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.status === 404) {
                    throw new Error('No data found');
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
                setError(null);
            })
            .catch(error => {
                if (error.message === 'No data found') {
                    setIsLoading(false);
                    setError(null);
                } else {
                    setIsLoading(false);
                    setError(error.message);
                }
            });
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;

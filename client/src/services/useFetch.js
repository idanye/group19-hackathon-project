import { useEffect, useState } from "react";

// custom hook to fetch data from the server

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error('Failed to fetch data')
            }
            return response.json()})
        .then(data => {
            setIsLoading(false);
            setData(data); 
            setError(null);
        })
        .catch(error => {
            // catch network error
            setIsLoading(false);
            setError(error.message);
        });
    }, [url]);
    return {data, isLoading, error};
};

export default useFetch;
import { useEffect, useState } from "react";

// custom hook to fetch data from the server

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(response => {
            if(response.status === 404){
                throw Error('No data found')
            }
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
            // we don't want to show an error message for this case
            if(error.message === 'No data found'){
                setIsLoading(false);
                setError(null);
            }
            else
            {
                 // catch network error
                setIsLoading(false);
                setError(error.message);
            }
        });
    }, [url]);
    return {data, isLoading, error};
};

export default useFetch;
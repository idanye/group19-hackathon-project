import { useEffect, useState } from "react";

const usePaginatedFetch = (url, itemsPerPage) => {
    const [items, setItems] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            setIsFetching(true);
            try {
                console.log(`Fetching page ${page} from ${url}`);

                const response = await fetch(`${url}?page=${page}&limit=${itemsPerPage}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Received data:', data);

                if (data.questions) {
                    setItems(prevItems => 
                        page === 1 ? data.questions : [...prevItems, ...data.questions]
                    );
                    setHasMore(data.hasMore);
                } else {
                    throw new Error('Invalid data format received');
                }

                setError(null);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setIsFetching(false);
            }
        };

        fetchItems();
    }, [url, page, itemsPerPage]);

    const resetItems = () => {
        setItems([]);
        setPage(1);
        setHasMore(true);
        setError(null);
    };

    return { 
        items, 
        isFetching, 
        hasMore, 
        setPage, 
        error,
        resetItems 
    };
};

export default usePaginatedFetch;
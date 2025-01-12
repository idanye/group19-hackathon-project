// import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch'; 

const ExpertsList = () => {

    const { data: experts, isLoading, error } = useFetch('http://localhost:5000/admin/allExperts');

    return (
        <div className="experts-list-page">
            <h1>Experts</h1>
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="error">Error: {error}</div>}
            {!experts && !isLoading && <div>No experts found</div>}

            {experts && (
                <div className="experts-container">
                    <ul className="experts-list">
                        {experts.data.map((expert) => (
                            <li key={expert._id} className="expert-item">
                                <div className="expert-details">
                                    <p>Name: {expert.expertName}</p>
                                    <p>Id: {expert.expertID}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExpertsList;

import useFetch from "../../Hooks/useFetch";
const PendingApproval = () => {

    const { data: experts, isLoading, error } = useFetch('http://localhost:5000/admin/unApprovedExperts');

    return (
        <div className="experts-list-page">
            <h1>UnApproved Experts</h1>
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div className="error">Error: {error}</div>}
            {!experts && !isLoading && <div>No requests found</div>}

            {experts && (
                <div className="experts-container">
                    <ul className="experts-list">
                        {experts.data.map((expert) => (
                            <li key={expert._id} className="expert-item">
                                <div className="expert-details">
                                    <p>Name: {expert.expertName}</p>
                                    <p>Id: {expert.expertID}</p>
                                    <button>Approve</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
export default PendingApproval;
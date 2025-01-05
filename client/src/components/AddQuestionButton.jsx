import { useNavigate } from 'react-router-dom';

const AddQuestionButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/question-form');
    };

    return (
        <div className="floating-button" onClick={handleClick}>
            <span className="material-symbols-outlined">
                post_add
            </span>
        </div>
    );
};

export default AddQuestionButton;

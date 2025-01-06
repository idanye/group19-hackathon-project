import PropTypes from "prop-types";
import useFetch from "../services/useFetch"; // custom hook to fetch data
import { Link } from "react-router";


const CategoryPage = (props) => {
    const category = props.category;
    const {data : categoryQuestions, isLoading, error} = useFetch(`http://localhost:5000/staysafe/getCategoryQuestions/${category}`);
    
    return (
        <div className="category-page-container">
            <div className="category-page-header">
                <h1 className="headline">{category}</h1>
            </div>
            <div className="category-page-body">
                {error && <div className="error">{error}</div>}
                {isLoading && <div className="loading">Loading...</div>}
                {categoryQuestions && categoryQuestions.length === 0 && 
                    <div className="no-category-questions">No questions available</div>}
                {categoryQuestions && categoryQuestions.length > 0 && 
                    <div className="category-questions-list-container">
                        <ul className="category-questions-list">
                            {categoryQuestions.map((question, index) => (
                                <Link to={`/${category}/${question._id}`} style={{textDecoration : "none"}} key={index} className="question-link">
                                    <li key={index} className="category-questions-list-item">
                                        <h2>{question.question_header}</h2>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                }
            </div>

        </div>
    );
}

CategoryPage.propTypes = {
    category: PropTypes.string.isRequired, 
};


export default CategoryPage;
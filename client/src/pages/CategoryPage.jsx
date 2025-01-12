// Import libraries and modules
import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router";
import { Clock, MessageSquare } from 'lucide-react';
import '../style/CategoryPage.css';

// CategoryPage component to display questions for a specific category
const CategoryPage = (props) => {
    const category = props.category; // Receive the category name as a prop
    const { data: categoryQuestions, isLoading, error } = useFetch(`http://localhost:5000/staysafe/getCategoryQuestions/${category}`);

    // Function to calculate how long ago a question was created
    const formatTimeAgo = (date) => {
        const now = new Date(); // Current date
        const past = new Date(date); // QuestionModel creation date
        const diffInHours = Math.floor((now - past) / (1000 * 60 * 60)); // Calculate the difference in hours

        if (diffInHours < 24) {
            return `${diffInHours} hours ago`; // If less than 24 hours
        } else {
            const diffInDays = Math.floor(diffInHours / 24); // Calculate the difference in days
            return `${diffInDays} days ago`; // If more than 24 hours
        }
    };

    return (
        <div className="forum-container">
            {/* Page title displaying the category name */}
            <h1 className="category-title">{category}</h1>

            {/* List of questions */}
            <div className="questions-list">
                {/* Error message in case of loading issues */}
                {error && <div className="error-message">Error loading questions</div>}
                {/* Loading message */}
                {isLoading && <div className="loading-message">Loading...</div>}

                {/* Render the questions if data is available */}
                {categoryQuestions && categoryQuestions.map((question) => (
                    <Link
                        to={`/${category}/${question._id}`} // Link to the specific question page
                        key={question._id}
                        className="question-item"
                    >
                        {/* User avatar */}
                        <div className="user-avatar">
                            {question.name_asked_by.charAt(0).toUpperCase()} {/* First letter of the username */}
                        </div>

                        {/* QuestionModel content */}
                        <div className="question-content">
                            <h3 className="question-title">{question.question_header}</h3>
                            <div className="question-meta">
                                <span className="author-name">
                                    {question.is_anonymous ? "Anonymous" : question.name_asked_by}
                                </span>
                                <span className="meta-separator">•</span>
                                <span className="timestamp">
                                    <Clock size={14} />
                                    {formatTimeAgo(question.createdAt)}
                                </span>
                                <span className="meta-separator">•</span>
                                <span className="replies">
                                    <MessageSquare size={14} />
                                    {question.num_replies || 0} replies
                                </span>
                            </div>
                        </div>

                        {/* Category tag */}
                        <div className="category-tag">
                            {category}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

// Prop type validation
CategoryPage.propTypes = {
    category: PropTypes.string.isRequired, // Required prop of type string
};

// Export the component
export default CategoryPage;

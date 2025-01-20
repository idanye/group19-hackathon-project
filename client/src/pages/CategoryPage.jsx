// Import libraries and modules
import useFetch from "../hooks/useFetch.jsx";
import { Link } from "react-router";
import { Clock, MessageSquare } from 'lucide-react';
import { useParams, Navigate } from "react-router-dom";
import '../style/CategoryPage.css';
import useValidCategory from '../hooks/useValidCategory.jsx';
import { useState } from "react";

// CategoryPage component to display questions for a specific category
const CategoryPage = () => {
    const { category } = useParams(); // Get the category name from the URL

    // Fetch data based on the category
    const url = category === "All-Questions" 
        ? "http://localhost:5000/staysafe/questions/"
        : `http://localhost:5000/staysafe/questions/getCategoryQuestions/${category}`;

    const { data: categoryQuestions, isLoading, error } = useFetch(url);
    
    const [search, setSearch] = useState("Filter By Key Words");
    const [filteredQuestions, setFilteredQuestions] = useState(false);

    // Check if the category is valid else redirect to 404 page
    const isValid = useValidCategory(category);
    if (!isValid) {
      return <Navigate to="/404" />;
    }


    const handleFilterChange = (value) => {
        if (value === "") {
            setFilteredQuestions(false);
            setSearch("Filter By Key Words");
        }
        else
        {
            setSearch(value);
            setFilteredQuestions(true);
        }
    }
    
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

    const formatCategory = (category) => {
        return category.replace(/-/g, ' '); // Replace all '-' with spaces
    };

    return (
        <div className="page">
            {/* Page title displaying the category name */}
            <h1 className="category-title">{formatCategory(category)}</h1>

            {/* List of questions */}
            <div className="questions-list">
                {error && <div className="error-message">Error loading questions</div>}

                {isLoading && <div className="loading-message">Loading...</div>}

                {/* Render the questions if data is available */}
                {categoryQuestions && categoryQuestions.length !== 0 && category === "All-Questions" &&
                    <input type = "text"
                    key="text"
                    placeholder={search}
                    className="input"
                    onChange={(e) => {handleFilterChange(e.target.value)}}>
                    </input> 
                } 
                {!filteredQuestions && categoryQuestions && categoryQuestions.map((question) => (
                <div className="question-container" key={question._id}>
                    <Link
                        to={`/${question.category}/${question._id}`} // Link to the specific question page
                        className="question-item"
                    >
                        <div className="user-avatar">
                            {question.name_asked_by.charAt(0).toUpperCase()} {/* First letter of the username */}
                        </div>

                        {/* QuestionModel content */}
                        <div className="question-content">
                            <h3 className="question-title">{ question.question_header }</h3>
                            <div className="question-meta">
                                <span className="author-name">
                                    { question.is_anonymous ? "Anonymous" : question.name_asked_by }
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
                            {question.category.replace(/-/g, ' ')}
                        </div>
                    </Link>
                </div>
                ))}
                {filteredQuestions && categoryQuestions && categoryQuestions.map((question) => {
                    if (question.question_body.toLowerCase().includes(search.toLowerCase())
                    || question.question_header.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <div className="question-container" key={question._id}>
                                <Link
                                    to={`/${question.category}/${question._id}`} // Link to the specific question page
                                    className="question-item"
                                >
                                    <div className="user-avatar">
                                        {question.name_asked_by.charAt(0).toUpperCase()} {/* First letter of the username */}
                                    </div>

                                    {/* QuestionModel content */}
                                    <div className="question-content">
                                        <h3 className="question-title">{ question.question_header }</h3>
                                        <div className="question-meta">
                                            <span className="author-name">
                                                { question.is_anonymous ? "Anonymous" : question.name_asked_by }
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
                                        {question.category.replace(/-/g, ' ')}
                                    </div>
                                </Link>
                            </div>
                        );
                    }
                    
                })}
            </div>
        </div>
    );
};


// Export the component
export default CategoryPage;

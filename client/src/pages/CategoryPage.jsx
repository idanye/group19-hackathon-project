// Import libraries and modules
import useFetch from "../hooks/useFetch.jsx";
import { useParams, Navigate } from "react-router-dom";
import '../style/CategoryPage.css';
import useValidCategory from '../hooks/useValidCategory.jsx';
import { useState } from "react";
import QuestionItem from "../components/QuestionItem.jsx";
// import { set } from "mongoose";

// CategoryPage component to display questions for a specific category
const CategoryPage = () => {
    const { category } = useParams(); // Get the category name from the URL

    // Fetch data based on the category
    // const url = category === "All-Questions" 
    //     ? "http://localhost:5000/staysafe/questions/"
    //     : `http://localhost:5000/staysafe/questions/getCategoryQuestions/${category}`;
    
    const url = `http://localhost:5000/staysafe/questions/`;

    const { data: categoryQuestions, isLoading, error } = useFetch(url);
    
    const [search, setSearch] = useState("Filter By Key Words");
    const [filteredQuestions, setFilteredQuestions] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

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


    const formatCategory = (category) => {
        return category.replace(/-/g, ' '); // Replace all '-' with spaces
    };

    return (
        <div className="page">
            {/* Page title displaying the category name */}
            <h1 className="category-title">{formatCategory(category)}</h1>
            {error && <div className="error-message">Error loading questions</div>}

            {isLoading && <div className="loading-message">Loading...</div>}

            {categoryQuestions && category === "All-Questions" &&
                <div className="question-filters">
                    <input type="text"
                           key="text"
                           placeholder={search}
                           className="text-filter"
                           onChange={(e) => {handleFilterChange(e.target.value)}}>
                    </input>

                    <select
                        id="category-select"
                        className="select-filter"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="" disabled>Filter By Category</option>
                        <option value="Cyber-Bullying">Cyber Bullying</option>
                        <option value="Sexual-Harassment">Sexual Harassment</option>
                        <option value="Eating-Disorders">Eating Disorders</option>
                    </select>
                </div>
            }

            {/* List of questions */}
            <div className="questions-list">

                {/* Render the questions if data is available */}
                {/*no filter and no category select*/ }
                {!filteredQuestions && selectedCategory == '' && categoryQuestions && categoryQuestions.map((question) => (
                    <QuestionItem question={question} key={question._id} />
                ))}
                {/*filter and no category select*/ }
                {filteredQuestions && selectedCategory == '' && categoryQuestions && categoryQuestions.map((question) => {
                    if (question.question_body.toLowerCase().includes(search.toLowerCase())
                    || question.question_header.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <QuestionItem question={question} key={question._id} />
                        );
                    }
                })}
                {/*no filter and category select*/ }
                {!filteredQuestions && selectedCategory != '' && categoryQuestions && categoryQuestions.map((question) => {
                    if (question.category === selectedCategory) {
                        return (
                            <QuestionItem question={question} key={question._id} />
                        );
                    }
                })}
                {/*filter and category select*/ }
                {filteredQuestions && selectedCategory != '' && categoryQuestions && categoryQuestions.map((question) => {
                    if ((question.question_body.toLowerCase().includes(search.toLowerCase())
                    || question.question_header.toLowerCase().includes(search.toLowerCase()))
                    && question.category === selectedCategory) {
                        return (
                            <QuestionItem question={question} key={question._id} />
                        );
                    }
                })}
            </div>
        </div>
    );
};


// Export the component
export default CategoryPage;

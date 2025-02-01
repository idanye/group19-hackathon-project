import {useCallback, useRef } from "react";
import '../style/ExpertForum.css';
import { useState } from "react";
import QuestionItem from "../components/QuestionItem.jsx";
import usePaginatedFetch from "../hooks/usePaginatedFetch.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const ExpertForum = () => {
    const ITEMS_PER_PAGE = 5;
    const url = `http://localhost:5000/staysafe/questions`;
    
    const { 
        items: questions, 
        isFetching, 
        hasMore, 
        setPage,
        error 
    } = usePaginatedFetch(url, ITEMS_PER_PAGE);

    const [search, setSearch] = useState("");
    const [filteredQuestions, setFilteredQuestions] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const observer = useRef();
    const lastQuestionElementRef = useCallback(node => {
        if (isFetching) return;
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        
        if (node) observer.current.observe(node);
    }, [isFetching, hasMore, setPage]);

    const handleFilterChange = (value) => {
        setSearch(value);
        setFilteredQuestions(value !== "");
    }

    const getFilteredQuestions = () => {
        if (!questions) return [];
        
        return questions.filter(question => {
            const matchesSearch = !filteredQuestions || 
                question.question_body.toLowerCase().includes(search.toLowerCase()) ||
                question.question_header.toLowerCase().includes(search.toLowerCase());
                
            const matchesCategory = !selectedCategory || 
                question.category === selectedCategory;
            
            return matchesSearch && matchesCategory;
        });
    }

    if (error) {
        return (
            <div className="error-message">
                <p>Error loading questions: {error}</p>
                <button onClick={() => setPage(1)}>Try Again</button>
            </div>
        );
    }

    return (
        <div className="page">
            <h1 className="category-title">Expert Forum</h1>

            <div className="question-filters">
                <input
                    type="text"
                    placeholder="Search questions..."
                    className="text-filter"
                    value={search}
                    onChange={(e) => handleFilterChange(e.target.value)}
                />

                <select
                    id="category-select"
                    className="select-filter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Questions</option>
                    <option value="Cyber-Bullying">Cyber Bullying</option>
                    <option value="Sexual-Harassment">Sexual Harassment</option>
                    <option value="Eating-Disorders">Eating Disorders</option>
                </select>
            </div>

            <div className="questions-list">
                {questions && questions.length > 0 ? (
                    getFilteredQuestions().map((question, index) => (
                        <div
                            ref={index === getFilteredQuestions().length - 1 ? lastQuestionElementRef : null}
                            key={question._id}
                        >
                            <QuestionItem question={question} />
                        </div>
                    ))
                ) : !isFetching && (
                    <div className="no-questions">No questions found</div>
                )}
            </div>

            {isFetching && <LoadingSpinner />}
            
            {!hasMore && !isFetching && questions.length > 0 && (
                <div className="end-message">No more questions to load.</div>
            )}
        </div>
    );
};

export default ExpertForum;
import { Link, useParams } from 'react-router';
import useFetch from '../hooks/useFetch.jsx';
import '../style/SingleQuestionPage.css';
import { Navigate } from 'react-router-dom';
import useValidCategory from '../hooks/useValidCategory.jsx';
import { useAuthContext } from '../hooks/useAuthContext.jsx';

const SingleQuestionPage = () => {
    const { category, id } = useParams()

    const formatDate = (db_date) => {
        const date = new Date(db_date);
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium', // e.g., Jan 1, 2025
            timeStyle: 'short',  // e.g., 12:00 PM
        }).format(date);
    }

    // useFetch to get the data of the question
    const { data: question,  isLoading : isLoadingQuestion, error : errorQuestion } = useFetch(`http://localhost:5000/staysafe/questions/getCategoryQuestions/${category}/${id}`)
    // useFetch to get the data of the answers
    const { data: answers,  isLoading : isLoadingAnswers, error : errorAnswers } = useFetch(`http://localhost:5000/staysafe/answers/${id}`)
    
    // check if the user is logged in - only logged-in users can comment
    const { user } = useAuthContext();
    
    // Check if the category is valid else redirect to 404 page
    const isValid = useValidCategory(category);
    if (!isValid) {
      return <Navigate to="/404" />;
    }

    return (
        <div className="page">
            <div className="navigation-button">
                <Link
                    to={`/${category}`}
                    className="go-back-link"
                >
                    <button className="go-back-button">Back</button>
                </Link>
            </div>

            <div className='single-question-page'>

                {isLoadingQuestion && <div className='loading'>Loading...</div>}
                {errorQuestion && <div className='error'>Error: {errorQuestion}</div>}
                {!question && !isLoadingQuestion && <Navigate to="/404"/>}

                {
                    question &&
                        (<>
                            <div className="single-question-content">
                                <div className='question-header'>
                                    <h1>{question.question_header}</h1>
                                </div>

                                <div className='question-info'>
                                    <p>written by {' '}
                                        <span>{question.name_asked_by}</span> on {' '}
                                        <span>{formatDate(question.createdAt)}</span>
                                    </p>
                                </div>

                                <div className='question-body'>
                                    <p>{question.question_body}</p>
                                </div>
                            </div>

                            <div className='question-add-answer'>
                                <p>Only experts and the question asker are allowed to respond</p>
                                { user ? (
                                    <div className="add-comment">
                                        <Link
                                            to={`/${category}/${id}/add-answer`}
                                            className="add-answer-link"
                                        >
                                            <button className="add-answer-button">Comment</button>
                                        </Link>
                                    </div>
                                ) : (
                                    <button
                                        className="add-answer-button"
                                        onClick={() => alert("You must be logged in to add a comment!")}
                                    >
                                        Comment
                                    </button>
                                )}

                            </div>

                            <hr className="elegant-line" />

                            <div className='question-comments'>
                                {isLoadingAnswers && <div className='loading'>Loading...</div>}

                                {errorAnswers && <div className='error'>Error: {errorAnswers}</div>}

                                {!answers && !isLoadingAnswers && <div>No answers yet</div>}

                                {answers && answers.map(answer => (
                                    <div key={answer._id} className='question-comment'>
                                        <div className='question-comment-header'>
                                            <p>answered by {' '}
                                                <span>{answer.expertName || answer.name}</span> on {' '}
                                                <span>{formatDate(answer.createdAt)}</span>
                                            </p>
                                        </div>

                                        <div className='question-comment-body'>
                                            <p>{answer.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </>)
                }
            </div>
        </div>
        )
        }

            export default SingleQuestionPage;
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnswerFormExpert = () => {
  const [text, setText] = useState("");
  const [expertID, setExpertID] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams(); // get the question id from the URL


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    if (!expertID) {
        setError("Please enter your expert ID.");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }

    if (text.length < 10) {
      setError("Your answer must be at least 10 characters long.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }


    const formData = {
      questionId : id,
      expertID,
      text,
    };

    try {
      const response = await axios.post(`http://localhost:5000/staySafe/exprt/${id}`, formData);
      console.log("Answer submitted successfully:", response.data);

      setSuccessMessage("Answer submitted successfully!");
      setText("");
      setExpertID("");

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) 
    {
        console.error("Error submitting answer:", error.response ? error.response.data : error.message);
        // Check if the error is related to authorization
        if (error.response && error.response.status === 403) {
            setError("You are not authorized to answer this question. Please make sure your Expert ID is correct.");
        } else {
            setError("There was an error submitting your answer. Please try again.");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="page">
      <div className="answer-form">
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}

        <h1 className="headline">Submit Your Answer</h1>

        <form onSubmit={handleSubmit}>
          <label>Expert ID:</label>
          <input
            type="text"
            id="expertID"
            value={expertID}
            onChange={(e) => setExpertID(e.target.value)}
            placeholder="Enter your Expert ID for verification"
          />

          <label>Answer:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            placeholder="Write your answer here..."
          />

          <button type="submit">Submit Answer</button>
        </form>
      </div>
    </div>
  );
};

export default AnswerFormExpert;

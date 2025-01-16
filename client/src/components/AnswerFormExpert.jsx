import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const AnswerFormExpert = () => {
  const [text, setText] = useState("");
  // const [expertID, setExpertID] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams(); // get the question id from the URL

  // get email from context
  const { user } = useAuthContext();
  const email = user.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    // if (!expertID) {
    //     setError("Please enter your expert ID.");
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //     return;
    // }

    if (text.length < 10) {
      setError("Your answer must be at least 10 characters long.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const formData = {
      questionId : id,
      // expertID,
      email,
      text,
    };

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user?.token; // user need a valid token to submit a comment
      const response = await axios.post(`Answers/expert/${id}`, formData,
        {
          headers: {
            authorization: `Bearer ${token}` // Include token in Authorization header
          }
        });
      console.log("Answer submitted successfully:", response.data);

      setSuccessMessage("Answer submitted successfully!");
      setText("");
      // setExpertID("");

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        console.error("Error submitting answer:", error.response ? error.response.data : error.message);
        // Check if the error is related to authorization
        if (error.response && error.response.status === 403) {
            setError("Only approved experts can answer questions.");
        } else if (error.response && error.response.status === 401) {
            setError("You have not been approved by an admin yet. Please wait for approval to start answering questions.");
        }
        else {
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
          {/* <label>ExpertModel ID:</label>
          <input
            type="text"
            id="expertID"
            value={expertID}
            onChange={(e) => setExpertID(e.target.value)}
            placeholder="Enter your ExpertModel ID for verification"
          /> */}

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

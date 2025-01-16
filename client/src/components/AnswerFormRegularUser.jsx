import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/api";
import { useAuthContext } from "../hooks/useAuthContext";


const AnswerFormRegularUser = () => {
  const [text, setText] = useState("");
  // const [email, setEmail] = useState(""); 
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams(); // get the question id from the URL

  // get user email from context
  const { user } = useAuthContext();
  const email = user.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    // if (!email) {
    //     setError("Please enter your email.");
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    //     return;
    // }

    if (text.length < 10) {
      setError("Your answer must be at least 10 characters long.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const formData = {
      questionId: id,
      email,  
      text,
    };

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user?.token; // user need a valid token to submit a comment
      const response = await axiosInstance.post(`Answers/regularUser/${id}`, formData,
        {
          headers: {
            authorization: `Bearer ${token}` // Include token in Authorization header
          }
        }
      );
      console.log("AnswerModel submitted successfully:", response.data);

      setSuccessMessage("AnswerModel submitted successfully!");
      setText("");
      // setEmail(""); 

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
        console.error("Error submitting answer:", error.response ? error.response.data : error.message);
        // Check if the error is related to authorization or other errors
        if (error.response && error.response.status === 403) {
            setError("Regular users are not allowed to comment on this question, except the question asker.");
        } else {
            setError("There was an error submitting your answer. Please try again.");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="answer-form-container">
      <div className="answer-form">
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}

        <h1 className="headline">Submit Your Answer</h1>

        <form onSubmit={handleSubmit}>
          {/* <label>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your Email for verification"
            required
          /> */}

          <label>Answer:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            placeholder="Write your answer here..."
            required
          />

          <button type="submit">Submit Answer</button>
        </form>
      </div>
    </div>
  );
};

export default AnswerFormRegularUser;

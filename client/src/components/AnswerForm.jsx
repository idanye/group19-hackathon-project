import { useState } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import AnswerFormExpert from '../components/AnswerFormExpert';
import AnswerFormRegularUser from '../components/AnswerFormRegularUser';
import useValidCategory from "../hooks/useValidCategory";
import { useAuthContext } from "../hooks/useAuthContext";


const AnswerForm = () => {
  const { category} = useParams();

  const [userRole, setUserRole] = useState(""); 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the question page
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value); 
  };

  // Check if the category is valid else redirect to 404 page
  const isValid = useValidCategory(category);
  if (!isValid) {
    return <Navigate to="/404" />;
  }

  // a user need to be logged in to answer a question
  const {user} = useAuthContext();

  return (
      <div className="page">
        <div className="answer-page-container">
          <div className="answer-form-selector">
            <button className="go-back-button" onClick={handleBack}>Back</button>
            {user ? (
              <div className="role-selection">
              <p>Select Your Role:</p>
              <label>
                <input
                  type="radio"
                  name="userRole"
                  value="expert"
                  checked={userRole === "expert"}
                  onChange={handleRoleChange}
                />
                Expert
              </label>
              <label>
                <input
                  type="radio"
                  name="userRole"
                  value="regular user"
                  checked={userRole === "regular user"}
                  onChange={handleRoleChange}
                />
                Regular user
              </label>
              {userRole === "expert" && <AnswerFormExpert />}
              {userRole === "regular user" && <AnswerFormRegularUser />}
            </div>
            ) :(<div className="error">You must be logged in to comment</div>)}
            

            
          </div>
        </div>
      </div>
  );
};

export default AnswerForm;

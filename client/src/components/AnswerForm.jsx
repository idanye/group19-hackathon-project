import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerFormExpert from '../components/AnswerFormExpert';
import AnswerFormRegularUser from '../components/AnswerFormRegularUser';

const AnswerForm = () => {
  const [userRole, setUserRole] = useState(""); 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the question page
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value); 
  };

  return (
    <div className="answer-page-container">
      <div className="answer-form-selector">
        <button className="go-back-button" onClick={handleBack}>Back</button>
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
        </div>

        {userRole === "expert" && <AnswerFormExpert />}  
        {userRole === "regular user" && <AnswerFormRegularUser />} 
      </div>
    </div>
  );
};

export default AnswerForm;

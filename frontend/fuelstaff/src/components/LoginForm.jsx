//Controlled LoginForm component with validation for too many attempts 
import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userEmailError, setUserEmailError] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordError, setUserPasswordError] = useState(null);
  const [numAttempts, setNumAttempts] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    if (userEmail != "") {
      setUserEmailError("Incorrect email");
    } else {
      setUserEmailError(null);
    }

    if (userPassword != "secret") {
      setUserPasswordError("Incorrect password");
      const currentAttempts = numAttempts + 1;
      setNumAttempts(currentAttempts);
    } else {
      setUserPasswordError(null);
    }
  };

  return numAttempts >= 5 ? (
    <p>Too many attempts</p>
  ) : (
    <form onSubmit={handleOnSubmit}>
      <div className="LoginForm componentBox">
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
                onChange handler uses event param e to access target value.
                Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          {userEmail}
          {userEmailError}
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
          {userPassword}
          {userPasswordError}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;

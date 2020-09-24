import React from "react";
import useFormState from "../customs/useFormState";

const AuthForm = ({ heading, btnTxt, signup }) => {
  // STATES
  // HOOKS && CONTEXTS
  const [email, handleEmail, resetEmail] = useFormState("");
  const [username, handleUsername, resetUsername] = useFormState("");
  const [password, handlePassword, resetPassword] = useFormState("");
  const [profileImageUrl, handleProfileImageUrl, resetImgUrl] = useFormState(
    ""
  );

  // FUNCTIONS

  return (
    <div>
      <div className="row justify-content-md-center text-center">
        <div className="colo-md-6">
          <form>
            <h2>{heading}</h2>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmail}
              id="email"
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePassword}
              id="password"
            />

            {signup && (
              <>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={handleUsername}
                  id="username"
                />

                <label htmlFor="profileImg">Profile Image:</label>
                <input
                  type="text"
                  className="form-control"
                  value={profileImageUrl}
                  onChange={handleProfileImageUrl}
                  id="profileImg"
                />
              </>
            )}

            <button className="btn btn-primary" type="submit">
              {btnTxt}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

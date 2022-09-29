import React from "react";
import "./style.css";

const SignUpForm = ({ onChange, user, onSubmit, onClose }) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

      <form onSubmit={onSubmit}>
        <div>
          <input
            name="userId"
            placeholder="User Id"
            value={user.userId}
            onChange={onChange}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={user.password}
          />
        </div>

        <div>
          <input
            name="name"
            placeholder="Name"
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={onChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={onChange}
            />
            Male
          </label>
        </div>

        <div>
          <textarea
            name="content"
            placeholder="Content"
            onChange={onChange}
            value={user.content}
          />
        </div>

        <div>
          <input
            name="languageId"
            placeholder="Language"
            onChange={onChange}
            value={user.languageId}
          />
        </div>

        <div>
          <input
            id="signUpSubmit"
            className="signUpSubmit"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
      <p>
        Already have an account? <br />
        <button
          onClick={() => {
            onClose(false);
          }}
        >
          Log in here
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;

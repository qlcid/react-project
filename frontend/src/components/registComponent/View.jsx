import React from "react";
import "./style.css";

const SignUpForm = ({ onChange, user, onSubmit, onClose }) => {
  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

      <form onSubmit={onSubmit}>
        <div>
          <input
            id="ip1"
            name="userId"
            placeholder="User Id"
            value={user.userId}
            onChange={onChange}
          />
        </div>

        <div>
          <input
          id="ip2"
            name="password"
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={user.password}
          />
        </div>

        <div>
          <input
          id="ip3"
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
              value="F"
              onChange={onChange}
            />
            Female
          </label>
          &nbsp
          <label>
            <input
              type="radio"
              name="gender"
              value="M"
              onChange={onChange}
            />
            Male
          </label>
        </div>

        <div>
          <textarea
            name="content"
            placeholder="Explain Yourself by One Sentence."
            onChange={onChange}
            value={user.content}
          />
        </div>

        <div>
          {/* <input
            name="languageId"
            placeholder="Language"
            onChange={onChange}
            value={user.languageId}
          /> */}
          <label for="cars">Choose a Language:</label><br></br>
            <select name="languageId" id="languageId" value={user.languageId} onChange={onChange}>
              <option value="1">JAVA</option>
              <option value="2">Python</option>
              <option value="3">Javascript</option>
              <option value="4">C++</option>
              <option value="5">C#</option>
            </select>
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
        <button id="bt1"
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
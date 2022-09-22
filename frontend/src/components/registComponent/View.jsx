import React from 'react';
import "./style.css";

const SignUpForm = ({
    onChange,
    user,
    onSubmit

  }) => {
    return (
      <div className="loginBox">
        <h1>Sign Up</h1>
  
        <form onSubmit={onSubmit}>
          <div>
          <input
            name="user_id"
            placeholder="User Id"
            value={user.user_id}
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
          <label><input type="radio" name="gender" value={user.gender} onChange={onChange}/>Female</label>
          <label><input type="radio" name="gender" value={user.gender} onChange={onChange}/>Male</label>
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
            name="language_id"
            placeholder="Language"
            onChange={onChange}
            value={user.language_id}
          />
          </div>

          <div>
            <input id="signUpSubmit" className="signUpSubmit" type="submit" value="Submit"></input>
          </div>
        </form>
        <p>
          Already have an account? <br />
          <a href="/">Log in here</a>
        </p>
      </div>
    );
};

export default SignUpForm;
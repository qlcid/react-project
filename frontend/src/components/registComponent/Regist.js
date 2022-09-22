import React, { Component } from "react";
import SignUpForm from "./View.jsx";
const axios = require("axios");

class Regist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        user_id: "",
        password: "",
        name: "",
        gender: "",
        user_desc: "",
        content: "",
        language_id: ""
      },
    };

    this.submitSignup = this.submitSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  submitSignup(user) {
    var params = { user_id: user.user_id, password: user.password, name: user.name, gender: user.gender, user_desc: user.user_desc, content: user.content, language_id: user.language_id };
    console.log(params.user_id);
    // axios
    //   .post("/", params) //서버
    //   .then(res => {
    //     if (res.data.success === true) {
    //     //   화면이동
    //     } else {
          
    //     }
    //   })
    //   .catch(err => {
    //     console.log("Sign up data submit error: ", err);
    //   });
  }


  render() {
    return (
      <div>
        <SignUpForm
          onChange={this.handleChange}
          onSubmit={this.validateForm}
          user={this.state.user}
     
        />
      </div>
    );
  }
}

export default Regist;

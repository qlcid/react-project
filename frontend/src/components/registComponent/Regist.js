import React, { Component } from "react";
import SignUpForm from "./View.jsx";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";

class Regist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userId: "",
        password: "",
        name: "",
        gender: "",
        content: "",
        languageId: "",
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
      user,
    });
    // console.log(user);
  }

  submitSignup(user) {
    var user = {
      userId: this.state.user.userId,
      password: this.state.user.password,
      name: this.state.user.name,
      gender: this.state.user.gender,
      content: this.state.user.content,
      languageId: this.state.user.languageId,
    };
    var params = {
      userId: user.userId,
      password: user.password,
      name: user.name,
      gender: user.gender,
      content: user.content,
      languageId: user.languageId,
    };
    console.log(params);
    alert(params.userId);

    axios
      .post("/api/user/signup", params) //서버
      .then((res) => {
        if (res.data.success === true) {
          //   화면이동
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
        } else {
        }
      })
      .catch((err) => {
        console.log("Sign up data submit error: ", err);
      });
  }

  render() {
    const { onClose, open } = this.props;
    const handleClose = () => {
      onClose();
    };
    return (
      <div>
        <Dialog
          onClose={handleClose}
          open={open}
          fullWidth
          maxWidth="xl"
          PaperProps={{
            sx: { width: "30%", height: "100%" },
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <SignUpForm
            onChange={this.handleChange}
            onSubmit={this.submitSignup}
            onClose={onClose}
            hide={false}
            user={this.state.user}
          />
        </Dialog>
      </div>
    );
  }
}
Regist.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark: PropTypes.bool,
};
export default Regist;

import React, { Component } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import LoginContainer from "../View";
import PropTypes from "prop-types";

class LoginPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userId: "",
        password: "",
      },
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.loginhandleChange = this.loginhandleChange.bind(this);
  }

  loginhandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  submitLogin(user) {
    var user = {
      userId: this.state.user.userId,
      password: this.state.user.password,
    };
    var params = {
      userId: user.userId,
      password: user.password,
    };

    axios
      .post("/api/user/login", params) //서버
      .then((res) => {
        if (res.status === 200) {
          alert("로그인 성공");
        } else {
        }
      })
      .catch((err) => {
        alert("로그인 실패");
        console.log(err);
      });
  }

  render() {
    const { onClose, open, dark } = this.props;
    const handleClose = () => {
      onClose();
    };
    return (
      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <LoginContainer
          dark={dark}
          onChange={this.loginhandleChange}
          onSubmit={this.submitLogin}
          onClose={onClose}
          hide={false}
          user={this.state.user}
        />
      </Dialog>
    );
  }
}

LoginPopup.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark: PropTypes.bool,
};
export default LoginPopup;

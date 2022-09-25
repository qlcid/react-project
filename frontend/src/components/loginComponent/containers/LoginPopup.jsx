import React from "react";
import Dialog from "@mui/material/Dialog";
import LoginContainer from "../View";
import PropTypes from "prop-types";

const LoginPopup = (props) => {
  const { onClose, open, dark } = props;
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
      <LoginContainer dark={dark} onClose={onClose} hide={false} />
    </Dialog>
  );
};
LoginPopup.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark: PropTypes.bool,
};
export default LoginPopup;

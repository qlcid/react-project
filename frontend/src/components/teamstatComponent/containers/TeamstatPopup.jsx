import React from "react";
import Dialog from "@mui/material/Dialog";
import TeamstatContainer from "../View";
import PropTypes from "prop-types";

const TeamstatPopup = (props) => {
  const { onClose, open,dark } = props;
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
      <p>hiiiii</p>
      <TeamstatContainer dark={dark} onClose={onClose} hide={false} />
    </Dialog>

  );
};
TeamstatPopup.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark:PropTypes.bool
};
export default TeamstatPopup;

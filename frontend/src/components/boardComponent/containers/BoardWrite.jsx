import React from "react";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import WriteModal from "./WriteModal";

const BoardWrite = (props) => {
  const { onClose, open,dark,board_id } = props;
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
      <WriteModal dark={dark} onClose={onClose} hide={false} board_id={board_id} />
    </Dialog>
  );
};
BoardWrite.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  dark:PropTypes.bool
};
export default BoardWrite;

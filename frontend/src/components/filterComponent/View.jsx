import React, { useState } from "react";
import PropTypes from "prop-types";


const FilterContainer = (props) => {
  const {onClose} =props;
  return (
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="ID"
      aria-label="login-id"
      />
    <input
      type="password"
      class="form-control"
      placeholder="PASSWORD"
      aria-label="login-password"
      />
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary" 
        type="button" 
        id="btn_login"
        onClick={()=>{onClose(false)}}>로그인</button>
    </div>
  </div>
  );
};

export default FilterContainer;

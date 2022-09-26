import React, { useState } from "react";
import RegistContainer from "../registComponent/View";
import RegistPopup from "../registComponent/Regist";

const LoginContainer = (props) => {
  const { onClose } = props;
  const [open, setOpen] = useState(false);

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
          // 임시로 모달닫는 동작만 추가
          onClick={() => {
            onClose(false);
          }}
        >
          로그인
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="btn_regist"
          onClick={() => {
            setOpen(true);
          }}
        >
          회원가입
        </button>
        <RegistPopup
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default LoginContainer;
export function RegistModal() {
  const [popup, setPopup] = useState(true);

  return <>{popup ? <RegistContainer onClose={setPopup} /> : null}</>;
}

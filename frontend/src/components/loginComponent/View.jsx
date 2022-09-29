import React, { useState } from "react";
import RegistContainer from "../registComponent/View";
import RegistPopup from "../registComponent/Regist";
import "./style.css";

const LoginContainer = ({ onChange, user, onSubmit, onClose }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="loginContainerBox">
      {/* <form onSubmit={onSubmit}> */}
      <div>
        <input
          name="userId"
          placeholder="ID"
          value={user.userId}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="PASSWORD"
          value={user.password}
          onChange={onChange}
        />
      </div>
      <div>
        <button
          id="loginSubmitBtn"
          className="loginSubmitBtn"
          //type="submit"
          value="로그인"
          type="button"
          // 임시로 모달닫는 동작만 추가
          // onClick={() => {
          //   onClose(false);
          // }}
          onClick={onSubmit}
        >
          로그인
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="btn_regist"
          className="btn_regist"
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
      {/* </form> */}
    </div>
  );
};

export default LoginContainer;
export function RegistModal() {
  const [popup, setPopup] = useState(true);

  return <>{popup ? <RegistContainer onClose={setPopup} /> : null}</>;
}

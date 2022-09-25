import React, { useState } from "react";
import Products from "../productsComponent/View";
import Button from "@mui/material/Button";
import DarkModeBtn from "./containers/DarkModeBtn";
import FilterContainer from "../filterComponent/View";
import FilterPopup from "../filterComponent/containers/FilterPopup";
import LoginContainer from "../loginComponent/View";
import LoginPopup from "../loginComponent/containers/LoginPopup";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`home ${darkMode ? "dark" : "normal"}`}>
      <DarkModeBtn
        dark={darkMode}
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      />
      <div className="row justify-content-between">
        <div className="col-3 fil">
          <FilterContainer hide={true} dark={darkMode} />
        </div>
        <div className="col-md-9 col-12 cont">
          <div className="login">
            <Button
              className="Button"
              onClick={() => {
                setOpen(true);
              }}
            >
              로그인
            </Button>
            <LoginPopup
              dark={darkMode}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            />
          </div>
          {/* 필터 컴포넌트
          <div className="dia">
            <Button
              className="Button"
              onClick={() => {
                setOpen(true);
              }}
            >
              Open filter
            </Button>
            <FilterPopup
              dark={darkMode}
              open={open}
              onClose={() => {
                setOpen(false);
              }}
            /> */}
          <Products dark={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
export function LoginModal() {
  const [popup, setPopup] = useState(true);

  return <>{popup ? <LoginContainer onClose={setPopup} /> : null}</>;
}

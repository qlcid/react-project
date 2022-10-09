import React, { useState } from "react";
import Products from "../productsComponent/View";
import FilterContainer from "../filterComponent/View";
import Button from "@mui/material/Button";
import FilterPopup from "../filterComponent/containers/FilterPopup";
import TeamstatPopup from "../teamstatComponent/containers/TeamstatPopup";
import BoardWrite from "../boardComponent/containers/BoardWrite";
import DarkModeBtn from "./containers/DarkModeBtn";
import LoginPopup from "../loginComponent/containers/LoginPopup";
import { ProductContext } from "../../contexts/productContext";
import LoginContainer from "../loginComponent/View";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [loginopen, setLoginopen] = useState(false);
  const [statopen, setStatopen] = useState(false);
  const [boardopen, setBoardopen] = useState(false);
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
            />
          </div>
          <Products  dark={darkMode} />
        </div>
      </div>
      <Button
              className="Button"
              onClick={() => {
                setStatopen(true);
              }}
            >
              팀프로젝트 현황
            </Button>
      <Button
        className="Button"
        onClick={() => {
          setBoardopen(true);
        }}
      >
        모집글쓰기
      </Button>
      <BoardWrite
        dark={darkMode}
        open={boardopen}
        onClose={() => {
          setBoardopen(false);
        }}
      />
      <TeamstatPopup
        dark={darkMode}
        open={statopen}
        onClose={() => {
          setStatopen(false);
        }}
      />
      <div className="col-md-9 col-12 cont">
        <div className="login">
        <Button
          className="Button"
          onClick={() => {
            setLoginopen(true);
          }}
        >
          로그인
        </Button>
        <LoginPopup
          dark={darkMode}
          open={loginopen}
          onClose={() => {
            setLoginopen(false);
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default Home;
export function LoginModal(){
  const [ popup, setPopup ] = useState(true);

  return (
    <>
      {popup ? <LoginContainer onClose={setPopup} /> : null}
    </>
  )
}

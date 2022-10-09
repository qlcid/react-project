import axios from "axios";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/productContext";
// import TeamstatDropdown from "./containers/TeamstatDropdown";
import TeamstatPopup from "../../teamstatComponent/containers/TeamstatPopup";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRadioGroup } from "@mui/material";

const WriteModal = (props) => {
  const [boardData, setBoardData] = useState({userId:"test"});
  const [userId, setUserId] = useState("asdf");
  const handleChange = (e) => {
    setBoardData({...boardData, [e.target.name]: e.target.value});
  }
  const {
    brands,
    setBrandFilterProducts,
    filterBrand,
    clearBrandFilterProducts,
    filterStates,
    filterCities,
    setBrandFilterState,
    setBrandFilterCity,
    filterState,
    filterCity,
    filterBrands,
    userid,
  } = useContext(ProductContext);
  const [open, setopen] = useState(false);
  let { hide, onClose, dark, board_id } = props;
  // 화면 켜질 때, 실행되는 함수 : 현재 신청하거나 들어간 프로젝트 글이 있는지 확인하고 만약 있으면 alert띄우고 글작성 못하게끔
  useEffect(()=>{
    axios({
      method: "get",
      url: `api/board/check/${userId}`,
    })
      .then((res)=>{
        console.log(res);
        if(res !== null){
          alert(`프로젝트 가입정보가 있으므로 글 작성이 불가능합니다.`);
          onClose(false);
        }
        else{
          alert(`프로젝트 가입정보가 없습니다.`);
          onClose(false);
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  []
  );

  const writeBoard = () =>{
    //눌렀을 때, insert
    console.log(boardData);
    axios({
      method : "post",
      url: "/api/board/",
      data: boardData
    })
    .then(function (response) {
        console.log(response);
        alert('모집글 작성이 완료되었습니다.');
        onClose(false);
    }).catch(function (error) {
        // 오류발생시 실행
        alert('오류가 발생하였습니다. 관리자에게 문의해주세요.');
        onClose(false);
    }).then(function() {
        // 항상 실행
    });
    
    // {
    //   "boardContent": "글 내용",
    //   "boardTitle": "글 제목",
    //   "language": "JAVA",
    //   "state": "Seoul",
    //   "userId": "test"
    // }
  }
  return (
    <>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header border-bottom-0">
        <span class="input-group-text text-primary" id="addon-wrapping">팀명</span>
        <input name="boardTitle" type="text" onChange={handleChange} class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">소개</h5>
      </div>
      <div class="modal-body py-0">
        <input name="boardContent" type="text" onChange={handleChange} class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">개발 언어</h5>
      </div>
      <div class="modal-body py-0">
        <input name="language" type="text" onChange={handleChange} class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">지역</h5>
      </div>
      <div class="modal-body py-0">
        <input name="state" type="text" onChange={handleChange} class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping"/>
      </div>
      <div class="modal-footer flex-column border-top-0">
        <button id="writeBtn" type="button" onClick={writeBoard} class="btn btn-lg btn-primary w-100 mx-0 mb-2">글 작성</button>
      </div>
    </div>
  </div>
  </>
  );
};
WriteModal.propTypes = {
  hide: PropTypes.bool,
  onClose: PropTypes.func,
  dark: PropTypes.bool,
};

export default WriteModal;

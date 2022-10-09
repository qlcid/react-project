import axios from "axios";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
// import TeamstatDropdown from "./containers/TeamstatDropdown";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRadioGroup } from "@mui/material";

const TeamstatContainer = (props) => {
  const [mateList, setMateList] = useState([{userid : '123', username : '홍길동', appl_yn : 'Y'}, {userid : '1233', username : '홍동', appl_yn : 'Y'}, {userid : '143', username : '홍길', appl_yn : 'N'}]);
  const {
    setBrandFilterProducts,
    clearBrandFilterProducts,
    setBrandFilterState,
    setBrandFilterCity,
    userid,
  } = useContext(ProductContext);
  const [readstat, setreadstat] = useState(true);
  const [updateing, setupdateing] = useState(false);
  const [isowner, setisowner] = useState(false);
  const [yesUserID, setYesUserId] = useState();
  
  let { hide, onClose, dark } = props;
  const setActiveProduct = (brandName) => {
    setBrandFilterProducts(brandName);
  };
  const setActiveState = (StateName) => {
    setBrandFilterState(StateName);
  };
  const setActiveCity = (CityName) => {
    setBrandFilterCity(CityName);
  };
  const clearFilter = () => {
    clearBrandFilterProducts();
  };
  const [isUpdate, setIsUpdate] = useState(false);
  // 처음 시작시 팀 프로젝트 정보 조회
  useEffect(()=>{
    console.log("updated");
    axios({
      method: "get",
      // url: `api/board/check/${loginuserId}`,
      url: `api/board/check/`,
    })
      .then((res)=>{
        //작성자일때, boardid하고 신청현황 받음
        // res.data.boardId
        // res.data.stat
      })
      .catch((error) => {
        axios({
          method: "get",
          // url: `api/board/check/${loginuserId}`,
          url: `api/teamstat/check/`,
        })
          .then((res2)=>{
            //팀이 있고 승인이 되었을 때,
            // res2.data.boardId
            
          })
          .catch((err) =>{
            alert(`프로젝트 가입정보가 없습니다.`);
            onClose(false);
            throw new Error(err);    
          });
        throw new Error(error);
      });
  },
  [] // isUpdate 변수 데이터가 변경되면 새로고침
  );
  // 승인 눌렀을 때
  useEffect(()=>{
    console.log("updated");
    axios({
      method: "put",
      url: "api/teammate/",
    })
      .then((res)=>{
        if(res.data === 'Y'){
          axios({
            method: "get",
            url: "/teammate/",
            data: userid, //현재 로그인한 사용자id
          })
            .then((res) => {
              console.log();
              setMateList([{userid : '123', username : '홍길동'}, {userid : '1233', username : '홍동'}, {userid : '143', username : '홍길'}])
              // 조회된 데이터 넣기 필요

            })
            .catch((error) => {
              throw new Error(error);
            });
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
  [isUpdate] // isUpdate 변수 데이터가 변경되면 새로고침
  );
  // 팀원 승인
  const teammateReg = (arg) => {
    alert(`승인이 성공적으로 이루어졌습니다.`);
    
    // setIsUpdate(!isUpdate);
    arg.preventDefault();
    axios({
      method: "put",
      url: "api/teammate/",
      data: arg, //승인한 사용자 id
    })
      .then((res) => {
        console.log(res);
        alert(`승인이 성공적으로 이루어졌습니다.`);
        //새로고침을 위한 isUpdate 변수 수정
        setIsUpdate(!isUpdate);
        
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

    // 글 수정 화면으로 변경
    const updateGoBoard = (arg) => {
      setreadstat(!readstat);
      setupdateing(true);
    };
  
    // 글 수정
    const updateBoard = () =>{
      setupdateing(false);
      setreadstat(!readstat);

      axios({
        method : "put",
        // url: `/api/board/${board_id}`,
        // data: boardData
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
    };

    // 글 삭제
    const deleteBoard = () => {

    };
    return (
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header border-bottom-0">
            <span class="input-group-text text-primary" id="addon-wrapping">팀명</span>
            <input id="bTitle" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" disabled='true'/>
          </div>
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title text-info">소개</h5>
          </div>
          <div class="modal-body py-0">
            <input id="bDesc" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" disabled='true'/>
          </div>
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title text-info">개발 언어</h5>
          </div>
          <div class="modal-body py-0">
            <input id="bLanguage" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" disabled='true'/>
          </div>
          <div class="modal-header border-bottom-0">
            <h5 class="modal-title text-info">지역</h5>
          </div>
          <div class="modal-body py-0">
            <input id="bState" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" disabled='true'/>
          </div>
          <div class="modal-footer flex-column border-top-0">
            {isowner && !updateing && <button id="updateGoBtn" type="button" onClick={updateGoBoard} class="btn btn-lg btn-warning w-100 mx-0 mb-2" data-bs-dismiss="modal">수정</button>}
            {isowner && updateing && <button id="updateBtn" type="button" onClick={updateBoard} class="btn btn-lg btn-warning w-100 mx-0 mb-2" data-bs-dismiss="modal">수정완료</button>}
            {isowner && <button id="updateBtn" type="button" onClick={deleteBoard} class="btn btn-lg btn-danger w-100 mx-0 mb-2" data-bs-dismiss="modal">수정완료</button>}
          </div>
          {isowner &&
          <ul class="list-group" id="mate-info">
            {/* 중괄호는 return 필수, 소괄호는 return 생략 */}
            {mateList.map((item, index)=>(
              <li class="list-group-item">
                {item.userid} / {item.username}
                { item.appl_yn === 'Y' &&
                  <button type="button" class="btn btn-success" onClick={teammateReg(item.userid)}>  
                    승인
                  </button>
                }
              </li>
            ))}
          </ul>
          }
        </div>
      </div>

    // </div>
  );
};
TeamstatContainer.propTypes = {
  hide: PropTypes.bool,
  onClose: PropTypes.func,
  dark: PropTypes.bool,
};

export default TeamstatContainer;
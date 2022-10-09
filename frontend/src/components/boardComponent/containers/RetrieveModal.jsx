import axios from "axios";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../../contexts/productContext";
// import TeamstatDropdown from "./containers/TeamstatDropdown";
import TeamstatPopup from "../../teamstatComponent/containers/TeamstatPopup";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRadioGroup } from "@mui/material";

const RetrieveModal = (props) => {
  const [mateList, setMateList] = useState([{userid : '123', username : '홍길동', appl_yn : 'Y'}, {userid : '1233', username : '홍동', appl_yn : 'Y'}, {userid : '143', username : '홍길', appl_yn : 'N'}]);
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
  const [updateopen, setupdateopen] = useState(false);
  const [open, setopen] = useState(false);
  const [readstat, setreadstat] = useState(true);
  const [updateing, setupdateing] = useState(false);
  let { hide, onClose, dark, board_id } = props;
  const [isUpdate, setIsUpdate] = useState(false);
  const [boardData, setBoardData] = useState({});
  const [params, setParams] = useState({});
  // 화면 켜질 때, 실행되는 함수
  useEffect(()=>{
    axios({
      method: "get",
      url: `api/board/${board_id}`,
    })
      .then((res)=>{
        if(res.data !== null){
          console.log(res.data);
          setBoardData(res.data);
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

  const joinBoard = () => {
    // setParams({boardId:{board_id}, userId : "test"});
    setParams({boardId:3, userId : "test3"});

    axios({
      method : "post",
      url: "/api/teamstat/",
      data: params,
    })
    .then(function (response) {
        console.log(response);
        alert('참가 신청이 완료되었습니다.');
        onClose(false);
    }).catch(function (error) {
        // 오류발생시 실행
        alert('오류가 발생하였습니다. 관리자에게 문의해주세요.');
        onClose(false);
    }).then(function() {
        // 항상 실행
    });
  }
  // 글 삭제
  // const deleteBoard = (arg) => {
  //   alert(`삭제가 정상적으로 이루어졌습니다.`);
  //   // setIsUpdate(!isUpdate);
  //   arg.preventDefault();
  //   axios({
  //     method: "delete",
  //     url: "/board/",
  //     data: arg, //board id
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       alert(`삭제가 정상적으로 이루어졌습니다.`);
  //       //해당 창 닫기
  //       onClose(false);
        
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // };
  return (
    <>
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header border-bottom-0">
        <span class="input-group-text text-primary" id="addon-wrapping">팀명</span>
        <input id="bTitle" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" value={boardData.boardTitle} disabled={readstat}/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">소개</h5>
      </div>
      <div class="modal-body py-0">
        <input id="bDesc" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" value={boardData.boardContent} disabled={readstat}/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">개발 언어</h5>
      </div>
      <div class="modal-body py-0">
        <input id="bLanguage" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" value={boardData.language} disabled={readstat}/>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">지역</h5>
      </div>
      <div class="modal-body py-0">
        <input id="bState" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" value={boardData.state} disabled={readstat}/>
      </div>
      <div class="modal-footer flex-column border-top-0">
        <button id="joinBtn" type="button" onClick={joinBoard} class="btn btn-lg btn-primary w-100 mx-0 mb-2">참여하기</button>
      </div>
    </div>
  </div>
  </>
  );
};
RetrieveModal.propTypes = {
  hide: PropTypes.bool,
  onClose: PropTypes.func,
  dark: PropTypes.bool,
};

export default RetrieveModal;

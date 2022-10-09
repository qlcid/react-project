import axios from "axios";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
// import TeamstatDropdown from "./containers/TeamstatDropdown";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRadioGroup } from "@mui/material";

const BoardContainer = (props) => {
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
  useEffect(()=>{
    console.log("updated");
    axios({
      method: "put",
      url: "/teammate/",
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
      url: "/teammate/",
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
  return (
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-primary">프로젝트 명</h5>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">소개</h5>
      </div>
      <div class="modal-body py-0">
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">개발 언어</h5>
      </div>
      <div class="modal-body py-0">
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title text-info">지역</h5>
      </div>
      <div class="modal-body py-0">
        <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
      </div>
      <div class="modal-footer flex-column border-top-0">
        <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">참여하기</button>
        <button type="button" class="btn btn-lg btn-warning w-100 mx-0 mb-2" data-bs-dismiss="modal">수정</button>
        <button type="button" class="btn btn-lg btn-danger w-100 mx-0 mb-2" data-bs-dismiss="modal">삭제</button>
      </div>
    </div>
  </div>
  );
};
BoardContainer.propTypes = {
  hide: PropTypes.bool,
  onClose: PropTypes.func,
  dark: PropTypes.bool,
};

export default BoardContainer;

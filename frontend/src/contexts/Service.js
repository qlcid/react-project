import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
export const getProducts = async (
  setProducts,
  setLoading,
  setBrands,
  setHashMapProducts,
  setFilterBrands,
  setStates,
  setCities,
  setFilterStates,
  setFilterCities
) => {
        const res = {};
        const datas = [];
        setLoading(true);
        axios({
          method: "get",
          url: 'api/board',
        })
          .then((result)=>{
            console.log(result);
            if(result !== null){
              // alert(`프로젝트 가입정보가 있으므로 글 작성이 불가능합니다.`);
              // onClose(false);
              result.data.forEach((bData)=>{
                var item = {};
                var add = {};
                add.state = bData.state;;
                add.city = '녀';
                item.product_name = bData.boardTitle;
                item.discription = bData.boardContent;
                item.brand_name = bData.language;
                item.date = bData.boardDate;
                item.image =   "./img/"+ ( Math.floor(Math.random()*(20))+1 ) + ".png";
                item.address = add;
                item.board_id = bData.boardId;

                item.time = '13:00'
                item.price = '130000'

                datas.push(item);
              })
              res.data = datas;

              setLoading(false);
              setProducts(res.data);
              let arrProducts = [];
              let arrStates = [];
              let arrCities = [];
              // this part is preprocessing the data to make the app is more efficient

              // set all unique brand names and set hash map to brandName -> arr of products
              res?.data?.forEach((product) => {
                const found = arrProducts.find((b) => product.brand_name === b);
                if (!found) {
                  //first time brand
                  if (arrProducts && arrProducts?.length) {
                    arrProducts = [...arrProducts, product.brand_name];
                  } else {
                    arrProducts = [product.brand_name];
                  }
                }

                //get uniqe cities and states
                const found1 = arrStates.find((b) => product?.address?.state === b);
                if (!found1) arrStates.push(product?.address?.state);
                const found2 = arrCities.find((b) => product?.address?.city === b);
                if (!found2) arrCities.push(product?.address?.city);
              });
              setBrands(arrProducts);
              setFilterBrands(arrProducts);
              setHashMapProducts(productsToMap(res?.data));
              setCities(arrCities);
              setStates(arrStates);
              setFilterCities(arrCities);
              setFilterStates(arrStates);
              //console.log(arrStates[0]);
            }
            else{
            }
          })
          .catch((error) => {
            throw new Error(error);
          });
      

        
};
export const productsToMap = (products) => {
  let map1 = new Map();
  products?.forEach((product) => {
    let tmpArr = map1.get(product.brand_name);
    if (tmpArr && tmpArr?.length)
      map1.set(product.brand_name, [...tmpArr, product]);
    else map1.set(product.brand_name, [product]);
  });
  return map1;
};

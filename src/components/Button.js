import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  width: 140px;
  height: 46px;
  background: #f8a4a4;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  line-height: 46px;
  cursor: pointer;
  margin-bottom: 28px;
`;

const Button = () => {
  const copyLocation = async () => {
    await navigator.clipboard
      .writeText("서울특별시 마포구 양화로 45 세아타워 16층 마포컨벤션센터")
      .then(() => {
        alert("주소가 복사되었습니다.🥰");
      });
  };

  return <Btn onClick={copyLocation}>주소 복사하기</Btn>;
};

export default Button;

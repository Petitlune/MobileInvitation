import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import InnerContent from "./InnerContent";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: hidden;
`;

const ModalInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  height: auto;
  padding: 28px 16px;
  background-color: #fff;
  z-index: 100;
  font-family: "Mapo";
  font-size: 14px;
`;

const ClosedButton = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 28px;
  color: #000;
  cursor: pointer;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const InnerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  img {
    width: 22px;
    height: 22px;
  }
  h3 {
    color: ${({ theme }) => theme.color.groom};
  }
`;

const ModalBox = ({ onClose }) => {
  return (
    <Container>
      <ModalInner>
        <ClosedButton onClick={onClose}>
          <IoIosCloseCircle />
        </ClosedButton>
        <InnerWrap>
          <InnerTitle>
            <img src="./img/flower.png" alt="flower" />
            <h3>신랑측</h3>
          </InnerTitle>
          <InnerContent
            title="신랑"
            name="현민혁"
            bank="신한은행 110 277 642435"
          />
          <InnerContent
            title="아버지"
            name="현지득"
            bank="하나은행 159 911602 539"
          />
          <InnerContent
            title="어머니"
            name="이미숙"
            bank="국민은행 458302 01 894027 "
          />
        </InnerWrap>
      </ModalInner>
    </Container>
  );
};

export default ModalBox;

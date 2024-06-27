import React from "react";
import styled from "styled-components";

const InnerText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 600;
  color: #444;
`;
const Groom = styled.span`
  display: flex;
  gap: 8px;
  span {
    color: #777;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
`;

const Celebration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    color: #777;
    font-weight: 600;
  }
  span {
    width: 116px;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 8px;
    margin: 0 24px;
    cursor: pointer;
    font-weight: 600;
  }
`;

const InnerContent = ({ title, name, bank }) => {
  const copyBank = async () => {
    await navigator.clipboard.writeText(bank).then(() => {
      alert("계좌번호가 복사되었습니다. 🥰");
      console.log("복사된 계좌번호:", bank);
    });
  };

  return (
    <InnerText>
      <Groom>
        <span>{title}</span>
        <p>{name}</p>
      </Groom>
      <Celebration>
        <p>{bank}</p>
        <span onClick={copyBank}>계좌번호 복사</span>
      </Celebration>
    </InnerText>
  );
};

export default InnerContent;

import React from "react";
import Button from "../components/Button";
import KakaoAPI from "../components/KakaoAPI";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
`;

const HowToGo = ({ Subtitle, DateInfo, SubtitleKR }) => {
  return (
    <Container>
      <DateInfo>
        <Subtitle>location</Subtitle>
        <SubtitleKR>오시는 길</SubtitleKR>
        <p>
          마포컨벤션센터 16층, 웨딩홀 <br />
          서울특별시 마포구 양화로 45 세아타워 <br />
          2호선 합정역 7번출구
        </p>
      </DateInfo>
      <Button />
      <KakaoAPI />
    </Container>
  );
};

export default HowToGo;

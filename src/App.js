import React, { useRef } from "react";
import "./App.css";
import Main from "./pages/Main";
import Date from "./pages/Date";
import HowToGo from "./pages/HowToGo";
import PhotoBook from "./pages/PhotoBook";
import Information from "./pages/Information";
import styled from "styled-components";
import BottomPage from "./pages/BottomPage";

const Container = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  max-width: 420px;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
  padding-top: 20px;
`;

const Subtitle = styled.div`
  font-size: 13px;
  font-family: "Mapo";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(248, 164, 164, 0.7);
  margin-bottom: 28px;
`;
const SubtitleKR = styled.h2`
  font-family: "Mapo";
  font-size: 1.2rem;
  color: #f8a4a4;
  margin: 10px;
`;
const DateInfo = styled.div`
  width: 90%;
  min-width: 280px;
  line-height: 25px;

  p {
    margin: 28px 0;
  }
`;

const Navigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  line-height: 48px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(248, 164, 164, 0.2);
  margin: 30px 0;
  font-family: "Mapo";
  font-weight: 600;
  color: #555;
  z-index: 100;

  span:hover {
    color: #f8a4a4;
    cursor: pointer;
  }
`;

function App() {
  const calendarRef = useRef(null);
  const howToGoRef = useRef(null);
  const photoBookRef = useRef(null);
  const informationRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Main Subtitle={Subtitle} id="Main"></Main>
      <Navigation>
        <span onClick={() => scrollToRef(calendarRef)}>예식일시</span>
        <span onClick={() => scrollToRef(howToGoRef)}>오시는길</span>
        <span onClick={() => scrollToRef(photoBookRef)}>사진첩</span>
        <span onClick={() => scrollToRef(informationRef)}>마음전하기</span>
      </Navigation>
      <div ref={calendarRef}>
        <Date Subtitle={Subtitle} SubtitleKR={SubtitleKR} DateInfo={DateInfo} />
      </div>
      <div ref={howToGoRef}>
        <HowToGo
          Subtitle={Subtitle}
          SubtitleKR={SubtitleKR}
          DateInfo={DateInfo}
        />
      </div>
      <div ref={photoBookRef}>
        <PhotoBook Subtitle={Subtitle} SubtitleKR={SubtitleKR} />
      </div>
      <div ref={informationRef}>
        <Information
          Subtitle={Subtitle}
          SubtitleKR={SubtitleKR}
          DateInfo={DateInfo}
        />
      </div>
      <BottomPage />
    </Container>
  );
}

export default App;

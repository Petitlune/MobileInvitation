import React, { useState, useRef } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import music from "../mp3/SellBuyMusic.mp3";
import { styled } from "styled-components";

const Wrap = styled.div`
  position: relative;
`;

const TopDate = styled.h1`
  margin: 10px 0;
  font-family: "Mapo";
  font-weight: 600;
`;
const Music = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 150;
  animation: volume alternate 2s infinite;

  @keyframes volume {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const WeddingMainImg = styled.img`
  width: 96%;
  min-width: 300px;
  height: auto;
  margin: 20px auto;
  border-radius: 180px;
`;

const MainText = styled.div`
  p:first-child {
    display: inline-block;
    margin: 6px;
    font-size: 24px;
    font-weight: 600;
    color: #222;
  }
  p:last-child {
    display: inline-block;
    margin-top: 12px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
  }
`;

const Main = ({ Subtitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(<FaVolumeMute />);
  const audioRef = useRef(new Audio(music));

  const playMusic = () => {
    const audio = audioRef.current;
    audio.volume = 0.2;
    audio.loop = true;
    if (audio.paused) {
      audio.play();
      setVolume(<FaVolumeHigh />);
    } else {
      audio.pause();
      setVolume(<FaVolumeMute />);
      audio.currentTime = 0;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Wrap>
      <Music onClick={playMusic}>{volume}</Music>
      <TopDate>2024.09.07</TopDate>
      <Subtitle>saturday</Subtitle>
      <WeddingMainImg src="./img/wedding01.jpg" alt="wedding-img" />
      <MainText>
        <p>현민혁 · 김지민</p>
        <p>
          2024년 9월 7일 토요일 오후 12시 20분 <br /> 마포컨벤션센터 16층,
          웨딩홀
        </p>
      </MainText>
    </Wrap>
  );
};

export default Main;

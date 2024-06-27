import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoAPI = () => {
  return (
    <Map
      center={{ lat: 37.5488856, lng: 126.9134067 }}
      style={{ width: "400px", height: "400px" }}
      level={3}
    >
      <MapMarker
        onClick={() => window.open("https://place.map.kakao.com/220719399")}
        position={{ lat: 37.5488856, lng: 126.9134067 }}
        level={3}
        image={{
          src: "./img/MarkerHeart.png",
          size: {
            width: 54,
            height: 54,
          },
        }}
      ></MapMarker>
    </Map>
  );
};

export default KakaoAPI;

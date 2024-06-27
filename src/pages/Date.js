import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
`;

const Calendar = styled.img`
  width: 100%;
`;

const Date = ({ Subtitle, SubtitleKR, DateInfo }) => {
  return (
    <Container>
      <DateInfo>
        <Subtitle>invitation</Subtitle>
        <SubtitleKR>
          특별한 날, <br /> 특별한 당신을 초대합니다.
        </SubtitleKR>
        <p>
          작은 것을 나누더라도 크게 행복한 사람과 <br />
          같은 곳을 바라보며 살고자 합니다. <br /> 귀한 걸음으로 축복해 주시면
          <br /> 더없는 기쁨으로 간직하겠습다.
        </p>
      </DateInfo>
      <Calendar src="./img/Calendar.png" alt="calendar" />
    </Container>
  );
};

export default Date;

import { useState, useEffect } from "react";
import styled from "styled-components";

function Clock1() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const month = (i) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    return monthNames[i];
  };

  return (

    <Clock>
      {[...Array(60)].map((e, i) => (
        <TimeContainer num={i} key={i}>
          <div>
            <Dot num={i} />
            {i % 5 === 0 ? (
              <Time num={i}>{i / 5 === 0 ? 12 : i / 5}</Time>
            ) : null}
          </div>
        </TimeContainer>
      ))}
      <ShortDate>
        {time && `${time.getDate()} ${month(time.getMonth())}`}
      </ShortDate>
      <Hours time={(time && time.getHours()) || 0} />
      <Minutes time={(time && time.getMinutes()) || 0} />
      <Seconds time={(time && time.getSeconds()) || 0} />
      <Circle />
    </Clock>
  );
}
export default Clock1;

const Clock = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  background-color: #1e4976;;
  border-radius: 100%;
`;

const TimeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${(props) => `rotate(${6 * props.num}deg)`};
  height: 100%;
  
`;

const Dot = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => (props.num % 5 === 0 ? "6px" : "2px")};
  width: ${(props) => (props.num % 5 === 0 ? "6px" : "2px")};
  border-radius: 100%;
  background-color: black;;
`;

const Time = styled.div`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: ${(props) => `translate(-50%, -50%) rotate(${-props.num * 6}deg)`};
`;

const ShortDate = styled.div`
  position: absolute;
  top: 50%;
  left: 27%;
  height: 10%;
  width: 25%;
  background-color: rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: capitalize;
  font-size: 12px;
  font-weight: 900;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 10%;
  width: 10%;
  border-radius: 100%;
  background-color: #1c2e45;;
  border: 5px solid black;
  box-sizing: border-box;
`;

const Seconds = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.time * 6}deg)`};
  transition: all 1s linear infinite;
  height: 50%;
  width: 4px;
  background-color: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  box-shadow: 1px 6px 24px 1px black;
`;

const Minutes = styled(Seconds)`
  width: 6px;
  height: 45%;
  transform: ${(props) => `translate(-50%, 10%) rotate(${props.time * 6}deg)`};
  background-color: black;
  clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
`;

const Hours = styled(Seconds)`
  width: 8px;
  height: 40%;
  background-color: black;
  transform: ${(props) => `translate(-50%, 25%) rotate(${props.time * 30}deg)`};
  clip-path: polygon(30% 0, 70% 0, 100% 100%, 0% 100%);
`;

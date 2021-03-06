import React, {useEffect, useState} from 'react'
import {Container} from "../../helpers/Styled";

function useTimer(){
  const [time, setTime] = useState(0);
  useEffect(() =>{
    const interval = setInterval(() => setTime(time => time+1), 1000);
    return () => clearInterval(interval);
  } ,[]);
  return time
}

export const Exercise5Solution  = () => {
  const time = useTimer();
  return (
    <Container>
      <h1>Time spent on this page:</h1>
      <h2>{time}s</h2>
    </Container>
  )
};



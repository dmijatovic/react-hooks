import React, {useState} from 'react'
import {Container, Button} from "../../helpers/Styled";

export const Exercise1 = () => {
  const [count, setCount] = useState(0)
  //console.log("Ex1...",count)
  return (
    <Container>
      <p>{count}</p>
      <Button onClick={()=>setCount(count+1)}>+</Button>
      <Button onClick={()=>setCount(count-1)}>-</Button>
    </Container>
  )
};
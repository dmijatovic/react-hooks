import React, {useState} from 'react'
import {Container, Button} from "../../helpers/Styled";

export const Exercise1Solution  =  () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button onClick={() => setCount(count => count -1)}>-</Button>
    </Container>
  )
};
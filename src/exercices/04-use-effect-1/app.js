import React,{ useState, useEffect } from 'react'
import {Container, InputArea} from "../../helpers/Styled";

export const Exercise4  = () => {
  const [val, setVal] = useState("")
  // document.title = 'Change this'
  useEffect(()=>{
    document.title = val
  },[val])
  return (
    <Container>
      <h1>Check the title of the tab</h1>
      <InputArea
        value={val}
        onChange={({target: {value}}) => {setVal(value)}}
      />
    </Container>
  )
}



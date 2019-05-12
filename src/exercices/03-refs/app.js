import React, {useRef, useState} from 'react'
import {Button, Container, InputArea} from "../../helpers/Styled";


export const Exercise3  = () => {
  const inputArea = useRef(null)
  const [val, setVal] = useState("")

  const changeFocus = () =>{
    const el = inputArea.current
    el.focus()
  }

  return (
    <Container>
      <InputArea
        ref={inputArea}
        value={val}
        onChange={({target: {value}}) => {setVal(value)}}
      />
      Your text is:
      <pre>
        {null}
      </pre>
      <Button onClick={changeFocus}>
        Click here to focus the field above!
      </Button>
    </Container>
  )
}



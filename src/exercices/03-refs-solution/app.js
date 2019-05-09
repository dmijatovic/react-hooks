import React, {useRef, useState} from 'react'
import {Button, Container, InputArea} from "../../helpers/Styled";


export const Exercise3Solution  = () => {
  const [value, setValue] = useState('');
  const inputField = useRef(null);

  return (
    <Container>
      <InputArea
        value={value}
        onChange={({target: {value}}) => setValue(value)}
        ref={inputField}
      />
      Your text is:
      <pre>
        {value}
      </pre>
      <Button onClick={() => inputField.current.focus()}>
        Click here to focus the field above!
      </Button>
    </Container>
  )
};



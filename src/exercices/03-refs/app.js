import React from 'react'
import {Button, Container, InputArea} from "../../helpers/Styled";


export const Exercise3  = () => {

  return (
    <Container>
      <InputArea
        value={''}
        onChange={({target: {value}}) => {}}
      />
      Your text is:
      <pre>
        {null}
      </pre>
      <Button onClick={() => {}}>
        Click here to focus the field above!
      </Button>
    </Container>
  )
}



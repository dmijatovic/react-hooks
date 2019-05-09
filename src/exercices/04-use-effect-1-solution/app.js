import React, {useEffect, useState} from 'react'
import {Container, InputArea} from "../../helpers/Styled";

export const Exercise4Solution  = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = name || 'GENERIC TITLE'
  }, [name]);

  return (
    <Container>
      <h1>Check the title of the tab</h1>
      <InputArea
        value={name}
        onChange={({target: {value}}) => setName(value)}
      />
    </Container>
  )
};



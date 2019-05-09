import React, {useReducer} from 'react'
import {Button, Container, InputArea, Label} from "../../helpers/Styled";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case INPUT:
      return {...state, text: payload};
    default:
      return state
  }
};

const initialState = {
  count: 0,
  text: ''
};

export const Exercise2Solution = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <p>{state.count}</p>
      <Button onClick={() => dispatch({type: INCREMENT})}>+</Button>
      <Button onClick={() => dispatch({type: DECREMENT})}>-</Button>
      <Label>Text</Label>
      <InputArea
        value={state.text}
        onChange={({target: {value}}) => dispatch({type: INPUT, payload: value})}
      />

      Your text is:
      <pre>
        {state.text}
      </pre>
    </Container>
  )
}



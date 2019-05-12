import React, { useReducer } from 'react'
import {Button, Container, InputArea, Label} from "../../helpers/Styled";

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INPUT = 'INPUT';


const reducerEx2 = (state,action) =>{
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case INPUT:
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}


export const Exercise2 = () => {
  //const dispatch = () => {}
  const [state,dispatch] = useReducer(reducerEx2,{
    count:1,
    text:"test"
  })
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



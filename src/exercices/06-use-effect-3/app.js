import React, {useReducer, useEffect, useState} from 'react';
// import axios from 'axios';
import {Button, Container} from "../../helpers/Styled";

const LOADING = 'LOADING';
const OK = 'OK';
const FAIL = 'FAIL';

const reducer = (state, {type, payload}) => {
  // This reducer needs to handle the state of the request, if it is loading, fetched or failed
  switch(type){
    case LOADING:
      return {
        data:null,
        isError: false,
        isLoading:true
      }
    case OK:
      return {
        data: payload,
        isLoading: false,
        isError: false
      }
    case FAIL:
      return {
        data: payload,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
};

const initialState = {
  data: null,
  isLoading: true,
  isError: false
};

function useFetchData(movieNumber) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // make and http call to this address : `https://swapi.co/api/films/${movieNumber}`
  // and make sure that you handle the loading, fetched and error state

  useEffect(()=>{
    dispatch({
      type:LOADING
    })
    fetch(`https://swapi.co/api/films/${movieNumber}`)
    .then(resp=>{
      if (resp.status===200){
        return resp.json()
      }else {
        const err = {
          errNr: resp.status,
          errMsg: resp.statusText,
          url: resp.url
        }
        throw err
      }
    })
    .then(data=>{
      //debugger
      dispatch({
        type:OK,
        payload: data
      })
    })
    .catch(e=>{
      //debugger
      dispatch({
        type:FAIL,
        payload: e
      })
    })
  },[movieNumber])

  return state
}

export const Exercise6 = () => {
  const [movieNumber, setMovieNumber] = useState(1);
  const {data, isLoading, isError} = useFetchData(movieNumber);
  if (isLoading) {
    return <Container>Fetching movie {movieNumber}</Container>
  }
  if (isError) {
    return <Container>
      <h1>This movie ({movieNumber}) does not exist!</h1>
      <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>Fetch new movie!</Button>
    </Container>
  }if (isError===false && isLoading===false){
    return (
      <Container>
        <h1>{data.title}</h1>
        <h2>{data.director}</h2>
        <p>{data.opening_crawl}</p>
        <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>Fetch new movie!</Button>
      </Container>
    )
  }
};



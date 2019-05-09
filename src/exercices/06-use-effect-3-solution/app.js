import React, {useReducer, useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Container} from '../../helpers/Styled';

const LOADING = 'LOADING';
const OK = 'OK';
const FAIL = 'FAIL';

const reducer = (state, {type, payload}) => {
  switch (type) {
    case LOADING:
      return {...state, isError: false, isLoading: true};
    case OK:
      return {isError: false, isLoading: false, data: payload};
    case FAIL:
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
};

const initialState = {
  data: null,
  isLoading: true,
  isError: false
};

function useFetchData(movieNumber) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({type: LOADING});
    axios
      .get(`https://swapi.co/api/films/${movieNumber}`)
      .then(({data}) => {
        dispatch({type: OK, payload: data});
      })
      .catch(() => {
        dispatch({type: FAIL});
      });
  }, [movieNumber]);
  return state;
}

export const Exercise6Solution = () => {
  const [movieNumber, setMovieNumber] = useState(1);
  const {data, isLoading, isError} = useFetchData(movieNumber);
  if (isLoading) {
    return <Container>Fetching movie {movieNumber}</Container>;
  }
  if (isError) {
    return (
      <Container>
        <h1>This movie ({movieNumber}) does not exist!</h1>
        <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>
          Fetch new movie!
        </Button>
      </Container>
    );
  }
  return (
    <Container>
      <h1> {data.title}</h1>
      <h2>{data.director}</h2>
      <p>{data.opening_crawl}</p>
      <Button onClick={() => setMovieNumber(Math.floor(Math.random() * 10))}>
        Fetch new movie!
      </Button>
    </Container>
  );
};

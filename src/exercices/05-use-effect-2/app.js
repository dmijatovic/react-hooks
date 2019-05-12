import React, { useState, useEffect } from 'react'
import {Container} from "../../helpers/Styled";


let myInterval

const useTimer = startTime => {
  const [timeOnPage, setTimeOnPage] = useState(0)

  useEffect(()=>{
    const startTime = new Date()
    //run once
    myInterval = setInterval(()=>{
      let timeNow = new Date()
      let diff = timeNow - startTime
      //console.log("diff...", Math.round(diff))
      setTimeOnPage(Math.round(diff/1000))
    },1000)

    return ()=>{clearInterval(myInterval)}

  },[])

  return timeOnPage
}


export const Exercise5  = () => {
  const timeOnPage = useTimer(new Date())

  //console.log("Ex5", timeOnPage)

  return (
    <Container>
      <h1>Time spent on this page:</h1>
      <h2>{timeOnPage}s</h2>
    </Container>
  )
}



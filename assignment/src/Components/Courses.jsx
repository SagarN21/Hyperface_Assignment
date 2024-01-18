import React, { useState } from 'react'
import CardContainer from './CardContainer'

const Courses = () => {
 const [state] = useState("Chunnu")
  return (
    <>
    
<CardContainer state={state}/>

    </>
  )
}

export default Courses
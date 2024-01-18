


import React, { useState } from 'react'
import CardContainer from './CardContainer'

const Articles = () => {
    const [state] = useState({name:'Articles',description:"Articles in audio for you"})
  return (
     <>
     <CardContainer state = {state}/>
     </>
  )
}

export default Articles
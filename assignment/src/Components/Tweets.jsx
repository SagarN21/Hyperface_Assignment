import React from 'react';
import CardContainer from './CardContainer';
import {useState} from 'react';

const Tweets = () => {
    const [state] = useState({name:"Tweets",description:"Litsen to top threads in audio"})
  return (
    <>
       <CardContainer state={state}/>
    </>
  )
}

export default Tweets
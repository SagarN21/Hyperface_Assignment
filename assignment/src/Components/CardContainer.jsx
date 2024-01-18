import React, { useEffect, useState, useRef } from 'react';
import styles from "../CSS/Courses.module.css"
import axios from 'axios'
import CoursesCard from './Card';

const CardContainer = ({state = {name:"Courses",description:"Bite sized courses for you"}}) => {
  console.log(state)
  const [data,setData] = useState([])
  let url = 'https://mock-server-w2o5.onrender.com/data/1'
 
  const getData = ()=>{
    axios.get(url).then((res)=>{
      setData(res.data.courses)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
 getData()
  },[])
  return (
    <>
    <div className = {styles.courses}>
        <header>{state.name} for you</header>
        <p>{state.description}</p>
    </div>
    <div className={styles.container}> {
       
      
     data && data.map((course)=>{
  
      return(
        <CoursesCard props={course}/>
        )
     
      }
      )

      
    }</div>
  
    
    </>
  )
}

export default CardContainer
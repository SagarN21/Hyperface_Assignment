import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CoursesCard = ({props}) => {
  
  
  const navigate = useNavigate()

  const handleClick = (e)=>{
    let param = e.target.id
    localStorage.setItem('id',param)
    localStorage.setItem('src',props.courseImage)
    localStorage.setItem('name',props.name)
  
 navigate("/player")
  }

  return (
    <>

    <div style={{display:"grid",gridAutoFlow:"column"}}>
        <div> 
        <img id = {props.id} src={props.courseImage} style={{width:"100%",objectFit:"cover"}} onClick={handleClick} />
    <h6 style={{color:'white'}}>{props.name}</h6>
   
    </div>
   
    </div>

   
    </>
  )
}

export default CoursesCard
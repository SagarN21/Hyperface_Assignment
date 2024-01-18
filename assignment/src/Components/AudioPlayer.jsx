// AudioPlayer.jsx

import React, { useEffect, useState } from 'react';
import styles from '../CSS/AudioPlayer.module.css';
import axios from 'axios'

const AudioPlayer = () => {
  const [audio,setAudio] = useState("https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg")
 const id = localStorage.getItem('id')
 const getAudio=()=>{
  axios.get(`https://mock-server-w2o5.onrender.com/audio/${id}`).then((res)=>{
   setAudio(()=>res.data.url)
  })
 }
   

  useEffect(()=>{
    getAudio()
console.log(audio)
  },[])
  


  


  return (
    <>
    <div className='container'> 
    
    <div className={styles.audioPlayer}>
    <h1 className = {styles.heading}>{localStorage.getItem('name')}</h1>
      <img src={localStorage.getItem('src')}/>
      <button className={styles.button}>view chapter notes</button>;
      <button className={styles.button}>Attempt Quiz</button>
      
      <audio controls >
      <source src={audio} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
      </div>
      
    
  
    </div>
    </>
  );
};

export default AudioPlayer;

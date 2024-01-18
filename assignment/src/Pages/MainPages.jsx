import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Homepage from '../Components/Homepage';
import AudioPlayer from '../Components/AudioPlayer';

const MainPages = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path ='/player' element={<AudioPlayer/>}/>
    </Routes>
  )
}

export default MainPages
import React from 'react'
import Header from './Header'
import Courses from './CardContainer'
import Articles from './Articles'
import Tweets from './Tweets'


const Homepage = () => {
  return (
    <div>
      <Header/>
      <Courses/>
      <Articles/>
      <Tweets/>
      
    
    </div>
  )
}

export default Homepage
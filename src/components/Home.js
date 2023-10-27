import React from 'react'

import Banner from './Banner'
import SecondBanner from './SecondBanner'
import Slider from './Slider'
import World from './World'
import Delivery from './Delivery'
import Arrival from '../pages/Arrival'
import Featured from '../pages/Featured'


const Home = () => {
  return (
    <div>
      <Slider intervalTime={5000} />
    <Delivery/>
      <Banner/>
      <Arrival/>
      <SecondBanner/>
      <Featured/>
      <World/>
    </div>
  )
}

export default Home

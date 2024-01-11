import React from 'react'

import Banner from './Banner'
import SecondBanner from './SecondBanner'
import Slider from './Slider'
import World from './World'
import Delivery from './Delivery'
import Arrival from '../pages/Arrival'
import Featured from '../pages/Featured'
import LastBanner from './LastBanner'
import ShopCategories from './ShopCategories'


const Home = () => {
  return (
    <div>
      <Slider intervalTime={5000} />
      <ShopCategories/>
    <Delivery/>
      <Banner/>
      <Arrival/>
      <SecondBanner/>
      <Featured/>
      <World/>
      <LastBanner/>
    </div>
  )
}

export default Home

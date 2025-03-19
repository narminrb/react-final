import React from 'react'
import Banner from '../../components/sections/Banner'
import HomeBanner from '../../components/sections/FakeBanner'
import Discover from '../../components/sections/Discover'
import CustomSwiper from '../../components/sections/ProductSwiper'
import New from '../../components/sections/New'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <Discover/>
      <CustomSwiper/>
      <New/>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../../components/sections/Banner'
import HomeBanner from '../../components/sections/FakeBanner'
import Discover from '../../components/sections/Discover'
import CustomSwiper from '../../components/sections/ProductSwiper'
import New from '../../components/sections/New'
import FeedbackSection from '../../components/sections/FeedbackSection'
import InstagramSect from '../../components/sections/InstagramSect'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <Discover/>
      <CustomSwiper/>
      <New/>
      <FeedbackSection/>
      <InstagramSect/>
    </div>
  )
}

export default Home
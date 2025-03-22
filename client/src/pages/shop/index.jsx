import React from 'react'
import ShopBanner from '../../components/sections/ShopBanner'
import ShopCenter from '../../components/sections/ShopCenter'
import Subscribe from '../../components/sections/Subscribe'
import ShopCategory from '../../components/sections/ShopCategory'

const Shop = () => {
  return (
    <div>
        <ShopBanner/>
        <ShopCenter/>
        <ShopCategory/>
        <Subscribe/>
    </div>
  )
}

export default Shop
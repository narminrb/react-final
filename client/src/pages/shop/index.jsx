import React from 'react'
import ShopBanner from '../../components/sections/ShopBanner'
import Subscribe from '../../components/sections/Subscribe'
import ShopCategory from '../../components/sections/ShopCategory'
import ShopRight from '../../components/shared/ShopRight'

const Shop = () => {
  return (
    <div>
        <ShopBanner/>
        <ShopRight/>
        <ShopCategory/>
        <Subscribe/>
    </div>
  )
}

export default Shop
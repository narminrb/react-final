import React from 'react'
import './style.css'

const ShopCategory = () => {
  return (
   <div className='container mx-auto  whole'>
     <div className='shopby'>Shop By Category</div>
     <div className='container mx-auto max-w-screen-xl flex flex-row gap-8'>

     <div className='card'>
     <div className="imgcontainerr">
      <img src='https://emax-demo.myshopify.com/cdn/shop/files/in4.jpg?v=1695922191' alt="Instagram" />
    </div>
      <div className='flex text-center justify-center'>
        <p className='desc'>Diamond Ring</p>
      </div>
     </div>
     <div className='card'>
     <div className="imgcontainerr">
      <img src='https://emax-demo.myshopify.com/cdn/shop/files/in3.jpg?v=1695922191' alt="Instagram" />
    </div>
      <div className='flex text-center justify-center'>
        <p className='desc'>Gold Earrings</p>
      </div>
     </div>
      
     <div className='card'>
     <div className="imgcontainerr">
      <img src='https://emax-demo.myshopify.com/cdn/shop/files/in2.jpg?v=1695913983' alt="Instagram" />
    </div>
      <div className='flex text-center justify-center'>
        <p className='desc'>Necklaces</p>
      </div>
     </div>
     <div className='card'>
     <div className="imgcontainerr">
      <img src='https://emax-demo.myshopify.com/cdn/shop/files/in1.jpg?v=1695913983' alt="Instagram" />
    </div>
      <div className='flex text-center justify-center'>
        <p className='desc'>Gold Bracelets</p>
      </div>
     </div>
     </div>
   </div>
  )
}

export default ShopCategory
import React from 'react';
import './style.css';

const ShopCategory = () => {
  return (
    <div className='container mx-auto whole'>
      <div className='shopby text-center text-2xl my-6'>Shop By Category</div>
      <div className='container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='card'>
          <div className='imgcontainerr'>
            <img 
              className='w-full h-auto object-cover' 
              src='https://emax-demo.myshopify.com/cdn/shop/files/in4.jpg?v=1695922191' 
              alt='Diamond Ring' 
            />
          </div>
          <div className='flex text-center justify-center mt-2'>
            <p className='desc text-lg font-medium'>Diamond Ring</p>
          </div>
        </div>
        <div className='card'>
          <div className='imgcontainerr'>
            <img 
              className='w-full h-auto object-cover' 
              src='https://emax-demo.myshopify.com/cdn/shop/files/in3.jpg?v=1695922191' 
              alt='Gold Earrings' 
            />
          </div>
          <div className='flex text-center justify-center mt-2'>
            <p className='desc text-lg font-medium'>Gold Earrings</p>
          </div>
        </div>
        <div className='card'>
          <div className='imgcontainerr'>
            <img 
              className='w-full h-auto object-cover' 
              src='https://emax-demo.myshopify.com/cdn/shop/files/in2.jpg?v=1695913983' 
              alt='Necklaces' 
            />
          </div>
          <div className='flex text-center justify-center mt-2'>
            <p className='desc text-lg font-medium'>Necklaces</p>
          </div>
        </div>
        <div className='card'>
          <div className='imgcontainerr'>
            <img 
              className='w-full h-auto object-cover' 
              src='https://emax-demo.myshopify.com/cdn/shop/files/in1.jpg?v=1695913983' 
              alt='Gold Bracelets' 
            />
          </div>
          <div className='flex text-center justify-center mt-2'>
            <p className='desc text-lg font-medium'>Gold Bracelets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;

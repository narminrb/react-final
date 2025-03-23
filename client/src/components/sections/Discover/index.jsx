import React from 'react'
import DiscoverCard from '../../shared/DiscoverCard'

const Discover = () => {
  return (
    <div className='container mx-auto max-w-screen-xl'>
        <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-4'>
        <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 h-[390px] mx-auto mt-8 group">
                <div>
                <img
                src='https://emax-demo.myshopify.com/cdn/shop/files/bnnrsz.jpg?v=1697213565'
                alt=''
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end ">
                <h3 className="mt-3 text-3xl font-bold text-white">
                Get 25% Off
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                 Discover More
                </p>
              </div>
            </div>
      </div>
       </div>
        <div className='col-span-8'>
        <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 h-[390px] mx-auto mt-8 group">
                <div>
                <img
                src='https://emax-demo.myshopify.com/cdn/shop/files/bnnrz.jpg?v=1697213286'
                alt=''
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end ">
                <h3 className="mt-3 text-3xl font-bold text-white">
                Pick Up In-store
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                 Discover More
                </p>
              </div>
            </div>
      </div>
        </div>
        </div>
        <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-8'>
        <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 h-[390px] mx-auto mt-8 group">
                <div>
                <img
                src='https://emax-demo.myshopify.com/cdn/shop/files/dsas.jpg?v=1697214332'
                alt=''
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end ">
                <h3 className="mt-3 text-3xl font-bold text-white">
                Best Selling Jewelry
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                 Discover More
                </p>
              </div>
            </div>
      </div>
        </div>
        <div className='col-span-4'>
        <div className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-40 h-[390px] mx-auto mt-8 group">
                <div>
                <img
                src='https://emax-demo.myshopify.com/cdn/shop/files/dsdss.jpg?v=1697214389'
                alt=''
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end ">
                <h3 className="mt-3 text-3xl font-bold text-white">
                Get 25% Off
                </h3>
                <p className="text-sm leading-6 text-gray-300">
                 Discover More
                </p>
              </div>
            </div>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Discover
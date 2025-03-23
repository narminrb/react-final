import React, { useState } from 'react'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import { useQuery } from '@tanstack/react-query';
import './style.css'

const ShopRight = () => {
      const [pageSize, setPageSize] = useState(9);
      const [pageLimit, setPageLimit] = useState(1);

        // const {data, isLoading, isError, error} = useQuery({
        //   queryKey:[QueryKeys.SHOPRIGHTS,pageSize, pageLimit,],
        //   queryFn: () => getAPiData(`/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
        // })
      
        



    const { data: shopData, isLoading:shopIsLoading, isError:shopIsError, error:shopError } = useQuery({
        queryKey: [QueryKeys.SHOPRIGHTS,pageSize, pageLimit],
        queryFn: async () => await getAPiData(`/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`),
      });
    
      const totalPage = Math.ceil(shopData?.meta?.pagination.total / pageSize);

      if (shopIsLoading) return <p>Loading...</p>;
      if (shopIsError) return <p>Error: {shopError.message}</p>;
  return (
    <div className='container mx-auto flex flex-wrap'>
<div className="bg-white py-9 px-8">
  <div className="mx-auto">
    <main className="grid grid-cols-3 items-center  gap-10">
      {shopData && shopData?.data.map((el, index) => (
        <div key={index}>
        <div className='shopimage'>
            <img className="mb-7 rounded-xl"  src={`http://localhost:1337${el?.image?.url}`}/>
            <div className="icon-container">
    <div className="icon"><i className="ri-image-line"></i></div>
    <div className="icon"><i className="ri-heart-line"></i></div>
    <div className="icon"><i className="ri-shopping-bag-4-line"></i></div>
  </div>
            </div>
        <div>
          <h3 className="shopdesc">{el.desc}</h3>
          <p className="pricebox">
            <span className='price'>${el.price}</span>
            <span className='discountprice'>${el.discountprice}</span>
          </p>

        </div>
      </div>
      ))}
    </main>
    <div>
        <ul className='flex items-center gap-1 justify-center my-10'>
          {totalPage > 0 &&
            new Array(totalPage).fill(1).map((_, index) => (
              <li
                className="bg-white text-black border w-10 h-10 rounded-[5px] flex items-center justify-center"
                key={index}
                onClick={() => setPageLimit(index + 1)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
  </div>
</div>

    </div>
  )
}

export default ShopRight
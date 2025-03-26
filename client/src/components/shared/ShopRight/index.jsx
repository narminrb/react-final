import React, { useState } from 'react'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import { useQuery } from '@tanstack/react-query';
import './style.css'
import { useCartContext } from '../../../providers/CartContext';
import { toast } from 'sonner';

const ShopRight = () => {
      const [pageSize, setPageSize] = useState(9);
      const [pageLimit, setPageLimit] = useState(1);
      const { addToCart,
        removeFromCart,
        carts,
        removeFromCartFully,
        totalAmount } = useCartContext()
        console.log(carts)
        // const {data, isLoading, isError, error} = useQuery({
        //   queryKey:[QueryKeys.SHOPRIGHTS,pageSize, pageLimit,],
        //   queryFn: () => getAPiData(`/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
        // })
      
        
        // const AddToCart = (item) => {
        //   addToCart(item)
        //   toast.success('Added to cart')
        // }

 const [inStockFilter, setInStockFilter] = useState(null); 
 const [color, setColor] = useState('');
 const [size, setSize] = useState('');

 const [priceFrom, setPriceFrom] = useState('');
const [priceTo, setPriceTo] = useState('');



  const { data: shopData, isLoading:shopIsLoading, isError:shopIsError, error:shopError,refetch } = useQuery({
    queryKey: [QueryKeys.SHOPRIGHTS, pageSize, pageLimit, inStockFilter,color,size],
    queryFn: () => {
      let filter = `/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`;

      if (color) {
        filter += `&filters[colors][color][$eq]=${color}`; 
      }
      if (size) {
        filter += `&filters[sizes][size][$eq]=${size}`;
      }
      if (priceFrom) {
        filter += `&filters[discountprice][$gte]=${priceFrom}`;
      }
      if (priceTo) {
        filter += `&filters[discountprice][$lte]=${priceTo}`;
      }
      if (inStockFilter !== null) {
        filter += `&filters[inStock]=${inStockFilter}`;
      }
      return getAPiData(filter);
    },
  });
  const handlePriceFilter = () => {
    refetch(); 
  };
    const { data: colorData, isLoading:colorIsLoading, isError:colorIsError, error:colorError } = useQuery({
        queryKey: [QueryKeys.COLORS],
        queryFn: async () => await getAPiData(`/colors?populate=*`),
      });

      const { data: sizeData, isLoading:sizeIsLoading, isError:sizeIsError, error:sizeError } = useQuery({
        queryKey: [QueryKeys.SIZES],
        queryFn: async () => await getAPiData(`/sizes?populate=*`),
      });
    
      const totalPage = Math.ceil(shopData?.meta?.pagination.total / pageSize);
      const handleStockChange = (status) => {
        setInStockFilter(status);
      };

      const handleColor = (selectedColor) => {
        if (color === selectedColor) {
          setColor(null);
        } else {
          setColor(selectedColor);
        }
      };
      const handleSize = (selectedSize) => {
        if (size === selectedSize) {
          setSize(null); 
        } else {
          setSize(selectedSize); 
        }
      }
      
      
      console.log(shopData)
    
      if (shopIsLoading) return <p>Loading...</p>;
      if (shopIsError) return <p>Error: {shopError.message}</p>;
  return (
    <div className='container mx-auto flex flex-wrap'>
<div className="bg-white py-9 px-8">
 <div className='grid grid-cols-4'>
 <div className="hidden md:block md:col-span-1">
           <div className='my-5'>
           <h1 className="catname">Availability</h1>
            <ul className="ul">
             <li 
                    onClick={() => handleStockChange(null)}
                    className='categorie'>
                       <button> 0 selected</button>
                     </li>
              <li>
                  <input
                    type="checkbox"
                    checked={inStockFilter === true}
                    onChange={() => handleStockChange(true)}
                  />
                <label className='label ml-2'>
                  In Stock
                </label>
              </li>
              <li>
                  <input
                    type="checkbox"
                    checked={inStockFilter === false}
                    onChange={() => handleStockChange(false)}
                  />
                <label className='label ml-2'>
                  Out of Stock
                </label>
              </li>
            </ul>

           </div>
           <h1 className="catname">Price</h1>
          <div className="flex flex-col">
          {/* <li 
                    onClick={() => handlePriceFilter('')}
                    className='categorie'>
                       <button> 0 selected</button>
                     </li> */}
           <div className='flex flex-row gap-2 text-center items-center px-3'>
            <label className='text-[18px]' htmlFor="from">$</label>
           <input
              type="number"
              name='from'
              placeholder="From"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="priceinp w-20 h-10 p-2 rounded"
            />
            <p className='text-[18px]'>From</p>
            <label className='text-[18px]' htmlFor="to">$</label>
            <input
              type="number"
              name='to'
              placeholder="To"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="w-20 h-10 priceinp p-2 rounded"
            />
            <p className='text-[18px]'>To</p>
           </div>
            <div className='flex flex-row px-3'>
            <button 
              onClick={handlePriceFilter} 
              className="bg-black w-full my-2 px-4 text-xl text-white py-3 hover:bg-[#c98060] transition-normal">
              Filter
            </button>
            </div>
          </div>

            <h1 className="catname">Color</h1>
            <ul className="ul">
             <li 
                    onClick={() => handleColor(null)}
                    className='categorie'>
                       <button> 0 selected</button>
                     </li>
                     {colorData && colorData?.data.map((el, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        checked={color === el?.color} 
                        onChange={() => handleColor(el?.color)}
                      />
                      <label className='label ml-2'>
                        {el?.color}
                      </label>
                    </li>
                  ))}


            </ul>
            <h1 className="catname">Size</h1>
            <ul className="ul">
            <li 
                    onClick={() => handleSize(null)}
                    className='categorie'>
                       <button> 0 selected</button>
                     </li>
                     {sizeData && sizeData?.data.map((el, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        checked={size === el?.size}
                        onChange={() => handleSize(el?.size)} 
                      />
                      <label className='label ml-2'>
                        {el?.size}
                      </label>
                    </li>
                  ))}
            </ul>
          </div>
  <div className='col-span-3'>
  <div className="mx-auto">
    <main className="grid grid-cols-3 items-center  gap-10">
      {shopData && shopData?.data.map((el, index) => (
        <div key={index}>
        <div className='shopimage'>
            <img className="mb-7 rounded-xl"  src={`http://localhost:1337${el?.image?.url}`}/>
            <div className="icon-container">
    <div className="icon"><i className="ri-image-line"></i></div>
    <div className="icon"><i className="ri-heart-line"></i></div>
    <div 
    onClick={() =>{
      addToCart(el)
      toast.success('Added to cart')
    }}
    className="icon"><i className="ri-shopping-bag-4-line"></i></div>
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
</div>

    </div>
  )
}

export default ShopRight
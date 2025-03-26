// import { useQuery } from '@tanstack/react-query'
// import React, {  useState } from 'react'
// import firstBtn from '../../../assets/firstbtn.png'
// import secondBtn from '../../../assets/secondbtn.png'
// import thirdBtn from '../../../assets/thirdbtn.png'
// import button from '../../../assets/button.png'
// import { toast } from 'sonner'
// import { getAPiData } from '../../../http/api'
// import { QueryKeys } from '../../../constants/QueryKeys'
// import './style.css'




// const ProductSection = () => {
//   const [pageSize, setPageSize] = useState(9);
//   const [pageLimit, setPageLimit] = useState(1);
//   const [startValue, setStartValue] = React.useState(0);
//   const [endValue, setEndValue] = React.useState(1000);
//     const [collection, setCollection] = useState(false);
//     const [starStart, setStartStars] = useState(1);
//     const [starEnd, setEndStars] = useState(5);
//     const [gridCount, setGridCount] = useState(3);
//     const [inStockFilter, setInStockFilter] = useState(null);

//     // const {carts, addToCart,removeFromCart, totalAmount} =useCartContext();

//     const [openModal, setOpenModal] = useState(false);
//     // console.log(carts);
//   const {data, isLoading, isError, error} = useQuery({
//     queryKey:[QueryKeys.SHOPRIGHTS,pageSize, pageLimit,],
//     queryFn: () => getAPiData(`/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
//   })


//   const {data:collectionData, isLoading:collectionLoading, isError:isCollectionError, error:collectionErr} = useQuery({
//     queryKey:[QueryKeys.SHOPRIGHTS,collection],
//     queryFn: () => getAPiData("/shoprights?populate=*")
//   })

//   const totalPage = Math.ceil(data?.meta?.pagination.total / pageSize);


//   return (
//     <div className='productsection'>
//         <div className='container mx-auto max-w-screen-xl'>
//             <div>

//             </div>
//         <div className='grid grid-cols-1 gap-2 px-8'>
//         <div className="hidden md:block md:col-span-3">
//            <div>
//             <h1 className='catname'>Availability</h1>
//            <ul className='ul'>
//            <li 
//                     onClick={()=>setCollection('')}
//                     className='categorie'>
//                        <button> 0 selected</button>
//                     </li>
//             {
//                 collectionData?.data && collectionData?.data.map((el,index) => (
//                     <li 
//                     onClick={()=>setCollection(el.color)}
//                     className='categories' key={index}>
//                         <input type="checkbox" />
//                         <label>{el.color}</label>
//                     </li>
//                 ))
//             }
//            </ul>
//            </div>
//            {/* <div>
//             <h1 className='catname'>PRICE</h1>
//              <div className='flex justify-between items-center my-3'>
//               <button>{startValue}</button>
//               <button>{endValue}</button>
//              </div>
//            </div> */}

//            </div>
//            {/* <div className='col-span-12 md:col-span-9'>
//                 <div className='prodheader'>
//                     <h2 className='living'>Living Room</h2>
//                     <div className='leftgrids'>
//                         <div>
//                           <img src={button} alt="" />
//                         </div>
//                         <div className='btns'>
//                         <div 
//                         onClick={()=>setGridCount(3)}
//                         className='grids'>
//                         <img src={firstBtn} alt="" />
//                         </div>
//                         <div 
//                         onClick={()=>setGridCount(2)}
//                         className='grids'>
//                         <img src={secondBtn} alt="" />
//                         </div>
//                         <div
//                         onClick={()=>setGridCount(2)}
//                          className='grids'>
//                         <img src={thirdBtn} alt="" />
//                         </div>
                       
//                         </div>
//                     </div>
//                 </div>
//                 </div> */}
//                 {/* {
//                   openModal && <SharedModal 
//                   onClose={() => setOpenModal(false)}
//                   />
//                 } */}
//          {/* <div className={`grid gap-6 grid-cols-1 ${gridCount === 2 ? 'md:grid-cols-2' : gridCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>

//              </div> */}
//         </div>
//     </div>

//     </div>
//   )
// }

// export default ProductSection


import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getAPiData } from '../../../http/api';
import { QueryKeys } from '../../../constants/QueryKeys';
import './style.css';

const ProductSection = () => {
  const [pageSize, setPageSize] = useState(9);
  const [pageLimit, setPageLimit] = useState(1);
  const [inStockFilter, setInStockFilter] = useState(null); // null = both, true = inStock, false = outOfStock

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.SHOPRIGHTS, pageSize, pageLimit, inStockFilter],
    queryFn: () => {
      let filter = `/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`;
      if (inStockFilter !== null) {
        filter += `&filters[inStock]=${inStockFilter}`;
      }
      return getAPiData(filter);
    },
  });

  const handleStockChange = (status) => {
    setInStockFilter(status);
  };

  return (
    <div className="productsection">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-2 px-8">
          {/* Filter Section */}
          <div className="hidden md:block md:col-span-3">
            <h1 className="catname">Availability</h1>
            <ul className="ul">
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={inStockFilter === true}
                    onChange={() => handleStockChange(true)}
                  />
                  In Stock
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={inStockFilter === false}
                    onChange={() => handleStockChange(false)}
                  />
                  Out of Stock
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={inStockFilter === null}
                    onChange={() => handleStockChange(null)}
                  />
                  All Products
                </label>
              </li>
            </ul>
          </div>

          {/* Product Display
          <div className="col-span-12 md:col-span-9">
            {isLoading && <p>Loading products...</p>}
            {isError && <p>Error loading products</p>}
            {data?.data?.length === 0 && <p>No products found</p>}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {data?.data?.map((product) => (
                <div key={product.id} className="product-card">
                  <h3>{product?.desc}</h3>
                  <p>{product?.inStock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

import { useQuery } from '@tanstack/react-query'
import React, {  useState } from 'react'
import firstBtn from '../../../assets/firstbtn.png'
import secondBtn from '../../../assets/secondbtn.png'
import thirdBtn from '../../../assets/thirdbtn.png'
import button from '../../../assets/button.png'
import { toast } from 'sonner'
import { getAPiData } from '../../../http/api'
import { QueryKeys } from '../../../constants/QueryKeys'
import './style.css'




const ProductSection = () => {
  const [pageSize, setPageSize] = useState(9);
  const [pageLimit, setPageLimit] = useState(1);
  const [startValue, setStartValue] = React.useState(0);
  const [endValue, setEndValue] = React.useState(1000);
    const [collection, setCollection] = useState('');
    const [starStart, setStartStars] = useState(1);
    const [starEnd, setEndStars] = useState(5);
    const [gridCount, setGridCount] = useState(3);

    // const {carts, addToCart,removeFromCart, totalAmount} =useCartContext();

    const [openModal, setOpenModal] = useState(false);
    // console.log(carts);
  const {data, isLoading, isError, error} = useQuery({
    queryKey:[QueryKeys.SHOPRIGHTS,collection,pageSize, pageLimit,],
    queryFn: () => getAPiData(`/shoprights?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
  })


  const {data:collectionData, isLoading:collectionLoading, isError:isCollectionError, error:collectionErr} = useQuery({
    queryKey:[QueryKeys.COLORS],
    queryFn: () => getAPiData("/colors?populate=*")
  })

  const totalPage = Math.ceil(data?.meta?.pagination.total / pageSize);


  return (
    <div className='productsection'>
        <div className='container mx-auto max-w-screen-xl'>
            <div>

            </div>
        <div className='grid grid-cols-12 gap-2'>
        <div className="hidden md:block md:col-span-3">
           <div>
            <h1 className='catname'>CATEGORIES</h1>
           <ul className='ul'>
           <li 
                    onClick={()=>setCollection('')}
                    className='categories'>
                        All rooms
                    </li>
            {
                collectionData?.data && collectionData?.data.map((el,index) => (
                    <li 
                    onClick={()=>setCollection(el.color)}
                    className='categories' key={index}>
                        {el.color}
                    </li>
                ))
            }
           </ul>
           </div>
           {/* <div>
            <h1 className='catname'>PRICE</h1>
             <div className='flex justify-between items-center my-3'>
              <button>{startValue}</button>
              <button>{endValue}</button>
             </div>
           </div> */}

           </div>
           {/* <div className='col-span-12 md:col-span-9'>
                <div className='prodheader'>
                    <h2 className='living'>Living Room</h2>
                    <div className='leftgrids'>
                        <div>
                          <img src={button} alt="" />
                        </div>
                        <div className='btns'>
                        <div 
                        onClick={()=>setGridCount(3)}
                        className='grids'>
                        <img src={firstBtn} alt="" />
                        </div>
                        <div 
                        onClick={()=>setGridCount(2)}
                        className='grids'>
                        <img src={secondBtn} alt="" />
                        </div>
                        <div
                        onClick={()=>setGridCount(2)}
                         className='grids'>
                        <img src={thirdBtn} alt="" />
                        </div>
                       
                        </div>
                    </div>
                </div>
                </div> */}
                {/* {
                  openModal && <SharedModal 
                  onClose={() => setOpenModal(false)}
                  />
                } */}
         {/* <div className={`grid gap-6 grid-cols-1 ${gridCount === 2 ? 'md:grid-cols-2' : gridCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>

             </div> */}
        </div>
    </div>

    </div>
  )
}

export default ProductSection
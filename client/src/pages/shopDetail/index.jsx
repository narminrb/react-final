import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { QueryKeys } from '../../constants/QueryKeys'
import { getAPiData } from '../../http/api'
import { useParams } from 'react-router'

const ShopDetail = () => {
  const { id } = useParams();
  const {data:shopData, isLoading:shopIsLoading, isError:shopIsError, error:shopError} = useQuery({
    queryKey: [QueryKeys.SHOPRIGHTS,id],
    queryFn: async () => await getAPiData(`/shoprights?populate=*&filters[id]=${id}`)
})
  return (
    <div>
    <div className='my-6'>
    </div>
      <div className="max-w-screen-xl mx-auto">
<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
    {
        shopData && shopData?.data.map((el,index) => (
            <div 
            key={index}
            className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={`http://localhost:1337${el?.image?.url}`} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{el?.desc}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div className="flex items-center mt-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
        ))
    }


    <p className="detaildesc py-5">
    To make sure you don’t make a mistake while buying a ring online, the AurianeJewelry team has prepared a small size guide with several options available to you. Otherwise, to make sure you don’t make a mistake, you can always come and try the rings on in the Showroom.
    </p>
       <p className='detaildesc'>Moreover, if you bought one of our rings and the size does not suit you, you can always come and exchange it for another size in our shop! Partili enem amir. Cum soluta alteru, novut dicam te velid, vix ut des ert mltera indoctum. Ne sabeo legendo vel, ue duoris debet paulo vocibus, acc usata facilisis qui etui. Vivendo en reprehe ndunt his, ne igiure equidem vel. Singulis oratio mel, sea ei integredi disse ntias. In e vocent cetero omittam. Cum iuvaret deserui dissentiet at. Mei facete pertinax, at meliore sapientem deterruisset nam sumi tantas de nilidi. Vel case alterum senserit, vis harum graecis dissentias et. Ut vim impedit temporibus, eum in novum sensibus, rationi scriptorem.</p>

    <div>
        <img src="https://cdn.shopify.com/s/files/1/1211/3710/files/bs.jpg?v=1696436873" alt="" />
    </div>
    <p className='detaildesc'>deserui dissentiet at. Mei facete pertinax, at meliore sapientem deterruisset nam sumi tantas de nilidi. Vel case alterum senserit, vis harum graecis dissentias et. Ut vim impedit temporibus, eum in novum sensibus, rationi scriptorem.</p>

    <div>
        <ul className='detailli'>
            <li>Measure your finger with a tape or thread.</li>
            <li>Measure the diameter of one of your rings with a batten and compare it with the table</li>
            <li>Fly make saw creeping evening make void own seasons behold.</li>
        </ul>
    </div>
</div>

</div>
    </div>
  )
}

export default ShopDetail
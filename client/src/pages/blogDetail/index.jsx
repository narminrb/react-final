import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { QueryKeys } from '../../constants/QueryKeys'
import { getAPiData } from '../../http/api'
import { useParams } from 'react-router'
import './style.css'
import CommentSect from '../../components/shared/CommentSect'
import BlogBanner from '../../components/sections/BlogBanner'

const BlogDetail = () => {
  const { id } = useParams();
  const {data:blogData, isLoading:blogIsLoading, isError:blogIsError, error:blogError} = useQuery({
    queryKey: [QueryKeys.BLOGS,id],
    queryFn: async () => await getAPiData(`/blogs?populate=*&filters[id]=${id}`)
})
  return (
    <div>
    <div className='my-6'>
    <BlogBanner/>
    </div>
      <div className="max-w-screen-lg mx-auto">
<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
       {
        blogData && blogData?.data.map((el,index) => (
          <div key={index}>
            <div className="relative">
        <a href="#">
            <img className="w-full"
                src={`http://localhost:1337${el?.image?.url}`}
                alt="Sunset in the mountains"/>
        </a>

    </div>
    <p
        className="detailtitle">{el.title}</p>
        <div className="text-sm font-regular text-gray-900 flex">
        <span className="datespan">
            <span className="ml-1">{el?.date}</span></span>
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
    <CommentSect/>
</div>

</div>
    </div>
  )
}

export default BlogDetail
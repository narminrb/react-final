import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { QueryKeys } from '../../../constants/QueryKeys'
import { getAPiData } from '../../../http/api'
import BlogCard from '../../shared/BlogCard'
import { Link, useParams } from 'react-router'

const Blogs = () => {
    const [pageSize, setPageSize] = useState(6);
    const [pageLimit, setPageLimit] = useState(1);
    const { id } = useParams();


    const {data:blogData, isLoading:blogIsLoading, isError:blogIsError, error:blogError} = useQuery({
        queryKey: [QueryKeys.BLOGS,pageSize, pageLimit,id],
        queryFn: async () => await getAPiData(`/blogs?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*`)
    })

    const totalPage = Math.ceil(blogData?.meta?.pagination.total / pageSize);
    if (blogIsLoading) return <p>Loading...</p>;
    if (blogIsError) return <p>Error: {error.message}</p>;
  return (
    <div className='container mx-auto my-10  max-w-screen-xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
            { blogData && blogData?.data.map((el,index) => (
                <Link to={`/blog/${el.id}`} key={el.id}>
                <BlogCard
                    image={`http://localhost:1337${el?.image?.url}`}
                    title={el.title}
                    desc={el.desc}
                    date={el.date}
                    commentCount={el?.commentCount}
                />
            </Link>
            ))}

        </div>
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
  )
}

export default Blogs
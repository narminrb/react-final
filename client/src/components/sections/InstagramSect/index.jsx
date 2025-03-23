import React from 'react'
import Instagram from '../../shared/Instagram'
import { getAPiData } from '../../../http/api';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../constants/QueryKeys';

const InstagramSect = () => {
    const { data:instaData, isLoading:isInstaDataLoading, isError:isInstaDataError, error:InstaDataError } = useQuery({
        queryKey: [QueryKeys.INSTACARDS],
        queryFn: async () => await getAPiData('instacards?populate=*')
    });
  return (
    <div className='container mx-auto max-w-screen-xl'>
       <div className='grid grid-cols-4 items-center gap-4'>
       {instaData && instaData?.data.map((el, index) => (
            <Instagram 
            key={index} 
            image={`http://localhost:1337${el?.image?.url}`} />
        ))}
       </div>
    </div>
  )
}

export default InstagramSect
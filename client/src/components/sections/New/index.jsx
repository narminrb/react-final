import React from 'react'
import NewCard from '../../shared/NewCard'
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';
import { useQuery } from '@tanstack/react-query';

const New = () => {
    const { data:newData, isLoading:isNewDataLoading, isError:isNewDataError, error:newDataError } = useQuery({
        queryKey: [QueryKeys.NEWCARDS],
        queryFn: async () => await getAPiData('newcards?populate=*')
    });
    //console.log(newData)
  return (
    <div className='container mx-auto max-w-screen-xl'>
       <div className='grid grid-cols-3 gap-4'>
       {newData && newData?.data.map((el,index) => (
            <NewCard key={index} 
            image={`http://localhost:1337${el?.image?.url}`}
            title={el.title} 
            price={el.price}
            />
        ))}
       </div>
    </div>
  )
}

export default New
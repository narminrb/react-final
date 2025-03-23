import React from 'react'
import { useQuery } from '@tanstack/react-query'
// import { QueryKeys } from '../../../constants/QueryKeys';
// import BannerCard from '../../shared/BannerCard';
import BannerCard from '../../shared/BannerCard';
import { QueryKeys } from '../../../constants/QueryKeys';
import { getAPiData } from '../../../http/api';



const Banner = () => {
    const { data:bannerData, isLoading:isBannerData, isError:isBannerErr, error:isBannerError } = useQuery({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: async () => await getAPiData('banners?populate=*')
    })

    console.log(bannerData)
    return (

    <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 items-stretch">
          {bannerData && bannerData?.data?.map((el, index) => (
            <BannerCard
              key={index}
              ImageSrc={`http://localhost:1337${el.image.url}`}
              title={el.title}
            />
          ))}
        </div>
      </div>
      
    )
}

export default Banner
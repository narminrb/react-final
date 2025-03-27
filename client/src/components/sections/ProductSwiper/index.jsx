import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import './style.css';
import { getAPiData } from '../../../http/api';
import { QueryKeys } from '../../../constants/QueryKeys';
import SwiperCard from '../../shared/ProductSwiperCard';

export default function CustomSwiper() {
  const { data: swiperData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SWIPERS],
    queryFn: async () => await getAPiData('swipers?populate=*'),
  });

  //console.log('API Response:', swiperData);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="swiper-container container mx-auto my-10  max-w-screen-xl">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          480: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 }, 
        }}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {swiperData?.data?.map((el, index) => {
          const imageUrl = el?.image?.url
            ? `http://localhost:1337${el.image.url}`
            : '/fallback-image.jpg';
          return (
            <SwiperSlide className="font-worksans" key={index}>
              <SwiperCard
                ImageSrc={imageUrl}
                desc={el?.desc || 'No description available'}
                price={el?.price || 'N/A'}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

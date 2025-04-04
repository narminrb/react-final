import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import './style.css';
import { getAPiData } from '../../../http/api';
import { QueryKeys } from '../../../constants/QueryKeys';
import SwiperCard from '../../shared/ProductSwiperCard';
import ProductModal from '../../shared/ProductModal';

export default function CustomSwiper() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: swiperData, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SWIPERS],
    queryFn: async () => await getAPiData('swipers?populate=*'),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleCardClick = (productData) => {
    setSelectedProduct(productData); 
    setIsModalOpen(true); 
  };

  return (
    <div className="swiper-container container mx-auto my-10 max-w-screen-xl">
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
                onIconClick={() => handleCardClick({
                  image: imageUrl,
                  desc: el?.desc,
                  longDesc: el?.longDesc,
                  price: el?.price,
                })}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}

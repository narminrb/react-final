import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./style.module.scss"
import { useLocation } from 'react-router';
import { QueryKeys } from '../../../constants/QueryKeys';
import { useQuery } from '@tanstack/react-query';
import { getAPiData } from '../../../http/api';

const HomeBanner = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { data:bannerData, isLoading: isBannerLoading, isError: isBannerError, error:isBannerErr } = useQuery({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: async () => await getAPiData('banners?populate=*')
    });

    // console.log('API Response:', bannerData);

    //console.log(`http://localhost:1337${el.attributes.image.data.attributes.url}`);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const location = useLocation();
    const activePath = (path) => {
        if (location.pathname === path) {
            return "active_nav";
        }
    }

    if (isBannerLoading) {
        return <div>Loading...</div>;  
    }

    if (isBannerError) {
        return <div>Error: {error.message}</div>;  
    }

    return (
        <div className='container mx-auto max-w-screen-xl'>
            <div className={styles.customContainer}>
                <nav className="bg-transparent border-gray-200 py-6 dark:bg-gray-900 absolute top-[80px] left-0 w-full z-10 hidden md:block">
                    <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-4 mx-auto">
                        <div className="flex items-center lg:order-2">
                            <div className="hidden mt-2 mr-4 sm:inline-block">
                                <span></span>
                            </div>
                            <button data-collapse-toggle="mobile-menu-2" type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2" aria-expanded="true">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='col-span-12 swiper-container'>
                <Swiper 
                 slidesPerView={1}
                 grabCursor={true} 
                 loop={true}
                 breakpoints={{
                    320: { slidesPerView: 1 }, 
                    768: { slidesPerView: 1 }, 
                    1024: { slidesPerView: 1 }, 
                  }}
                 pagination={{ clickable: true }}

                 navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                modules={[Navigation]}
                 className="mySwiper">
                {bannerData && bannerData?.data?.map((el, index) => {
                const imageUrl = el?.image?.url || '/fallback-image.jpg';  
                const backgroundColor = el?.color || '#ffffff';  

    return (
        <SwiperSlide key={index} style={{ backgroundColor }}>
            <div className="flex flex-col md:flex-row items-center justify-center h-[400px] md:h-[600px] p-6">
                <div>
                    <div className={styles.rootItems}>
                        <div className={styles.rootElements}>
                            <p>{el.desc}</p>
                            <h1 className='w-[500px]'>{el.title}</h1>
                            <button className={styles.button}>Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className="image-section w-full md:w-[447px] md:h-[391px] mt-6 md:mt-0 flex justify-center">
                    <img
                        src={`http://localhost:1337${imageUrl}`}
                        alt={el?.image?.alternativeText || 'Banner Image'}
                        className="w-full h-auto max-h-[300px] md:max-h-[391px] object-contain"
                    />
                </div>
            </div>
        </SwiperSlide>
    );
})}

<div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>

                </Swiper>
            </div>
        </div>
    );
}

export default HomeBanner;

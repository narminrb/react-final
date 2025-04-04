import React from 'react'
import { SwiperBody, SwiperContainer, SwiperDescription, SwiperImage, SwiperImageContainerWithHover, SwiperPrice, IconsContainer } from '../../ui/SwiperCard'
const SwiperCard = ({ ImageSrc, desc, price,onIconClick  }) => {
    return (
        <SwiperContainer>
            <SwiperImageContainerWithHover>
                <SwiperImage src={ImageSrc} />
                <IconsContainer>
                    <i className="ri-image-line"
                    onClick={onIconClick}
                     ></i>
                    <i className="ri-heart-line"></i>
                    <i className="ri-shopping-bag-4-line"></i>
                </IconsContainer>
            </SwiperImageContainerWithHover>
            <SwiperBody>
                <SwiperDescription>
                    {desc}
                </SwiperDescription>
                <SwiperPrice>
                    ${price}
                </SwiperPrice>
            </SwiperBody>
        </SwiperContainer>
    )
}

export default SwiperCard

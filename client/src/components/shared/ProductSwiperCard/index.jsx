import React from 'react'
import { SwiperBody, SwiperContainer, SwiperDescription, SwiperImage, SwiperImageContainerWithHover, SwiperPrice, IconsContainer } from '../../ui/SwiperCard'

const SwiperCard = ({ ImageSrc, HoverImageSrc, desc, price }) => {
    return (
        <SwiperContainer>
            <SwiperImageContainerWithHover>
                <SwiperImage src={ImageSrc} />
                <IconsContainer>
                    <i className="ri-shopping-bag-4-line"></i>
                    <i className="ri-heart-line"></i>
                    <i className="ri-file-copy-line"></i>
                    <i className="ri-search-line"></i>
                </IconsContainer>
            </SwiperImageContainerWithHover>
            <SwiperBody>
                <SwiperDescription>
                    {desc}
                </SwiperDescription>
                <SwiperPrice>
                    {price}
                </SwiperPrice>
            </SwiperBody>
        </SwiperContainer>
    )
}

export default SwiperCard

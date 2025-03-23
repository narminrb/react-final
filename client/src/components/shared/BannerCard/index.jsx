import React from 'react'
import { BannerBody, BannerContainer, BannerDescription, BannerImage, BannerImageContainer } from '../../ui/BannerCard'

const BannerCard = ({ ImageSrc, title }) => {
    return (
        <BannerContainer>
            <BannerImageContainer>
                <BannerImage src={ImageSrc} />
            </BannerImageContainer>
            <BannerBody>
                <BannerDescription>
                    {title}
                </BannerDescription>
            </BannerBody>
        </BannerContainer>
    )
}

export default BannerCard
import { styled } from "styled-components";

export const BannerContainer = styled.div`
  border: 1px solid #f0f0f0;
  width: 100%;
  height: 670px;
  position: relative; 
  overflow: hidden;
`;

export const BannerImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative; 
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const BannerDescription = styled.p`
  position: absolute;
  bottom: 20px; 
  left: 20px; 
  font-size: 1.4rem;
  font-weight: 400;
  color: white;
  padding: 8px 12px;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px; 
    background-color: white; 
    margin-top: 1px; 
  }
`;

export const BannerBody = styled.div`
  padding: 12px 0px;
`;

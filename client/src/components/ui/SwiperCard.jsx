import { styled } from "styled-components";

export const SwiperContainer = styled.div`
  width: 100%;
  height: 475px;
  position: relative; 
  overflow: hidden;
`;

export const SwiperImageContainer = styled.div`
  width: 100%;
  height: 407px;
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative; 
  border-radius:10px;
`;

export const SwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;
`;

export const SwiperBody = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SwiperDescription = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 400;
  color:#111111;
`;

export const SwiperPrice = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const SwiperDesc = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const IconsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 180px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: white;
  overflow: hidden;
  border-radius: 4px;

  i {
    flex: 1; 
    font-size: 1.3rem;
    font-weight: 300;
    color: black;
    cursor: pointer;
    text-align: center; 
    padding: 10px; 
  }

  i:hover {
    background-color: black;
    color: white; 
    transition: all 0.2s ease;
    border-radius: 4px; 
  }
`;


export const SwiperImageContainerWithHover = styled(SwiperImageContainer)`
  &:hover {
    ${IconsContainer} {
      opacity: 1;
    }
  }
`;

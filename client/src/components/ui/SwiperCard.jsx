import { styled } from "styled-components";

export const SwiperContainer = styled.div`
  width: 100%;
  height: 480px;
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
  padding: 15px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SwiperDescription = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  font-size: 20px;
    line-height: 25px;
    margin-bottom: 12px;
`;

export const SwiperPrice = styled.p`
  background-color:white;
  font-size: 20px;
  font-weight: 500;
  color: #c98060;
  line-height: 1;
  font-weight: 600;
`;

export const SwiperDesc = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const IconsContainer = styled.div`
  // position: absolute;
  // bottom: 20px;
  // // width: 180px;
  // // height: 45px;
  // margin: 0 auto;
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center; 
  // opacity: 0;
  // transition: opacity 0.3s ease;
  // // background-color: white;
  // overflow: hidden;
  // border-radius: 4px;
    position: absolute;
    bottom: 40px; 
    left: 30%;
    transform: translateY(30px);
    transition: opacity 0.5s ease, transform 0.5s ease;
    display: flex;
    gap: 10px;
    opacity: 0;

  i {
    width: 40px;
    height: 40px;
    background: white;
    color: black;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    // transform: translateY(30px);
    // transition: opacity 0.5s ease, transform 0.5s ease;
  }
    
  i:nth-child(1) {
    transition-delay: 0.1s;
  }

  i:nth-child(2) {
    transition-delay: 0.4s;
  }

  i:nth-child(3) {
    transition-delay: 0.6s;
  }

`;


export const SwiperImageContainerWithHover = styled(SwiperImageContainer)`
  &:hover {
    ${IconsContainer} {
      opacity: 1;
    }
  }
`;

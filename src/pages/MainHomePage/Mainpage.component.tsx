import { FC } from "react";
import styled from "styled-components";
import shoppingImage from "../../assets/Images/shopping-img.png";

export const Mainpage: FC = () => {
  return (
    <MainHomepageWrapper>
      <MiddleContentWrapper>
        <ButtonWrapper>
          <SellerButton>BE A SELLER</SellerButton>
          <ShoppingButton>LET'S MEET</ShoppingButton>
        </ButtonWrapper>
        <ImageWrapper>
          <ShoppingImage src={shoppingImage} alt="shopping-img"></ShoppingImage>
          <ShopNowButton>SHOP NOW</ShopNowButton>
        </ImageWrapper>
      </MiddleContentWrapper>
    </MainHomepageWrapper>
  );
};

const MainHomepageWrapper = styled.article`
  background-color: whitesmoke;
  overflow-x: hidden;
`;

const MiddleContentWrapper = styled.section`
  display: flex;
  position: relative;
`;

const ImageWrapper = styled.figure`
  object-fit: contain;
  margin-left: -1rem;
`;

const ShoppingImage = styled.img`
  height: calc(1rem + 73vh);
`;

const ButtonWrapper = styled.section`
  position: absolute;
  right: -1%;
  top: 30%;
  display: flex;
  flex-direction: column;
  z-index: 99999;
  @media (min-width: 576px) {
    display: none;
  }
`;

const ShoppingButton = styled.button`
  padding: 0.6rem;
  background-color: #de3163;
  width: 7rem;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5%;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    width: 8rem;
  }
`;

const SellerButton = styled.button`
  padding: 0.6rem;
  background-color: #5d3fd3;
  width: 7rem;
  color: white;
  border: none;
  font-weight: bold;
  border-radius: 5%;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  transition: 0.5s;
  &:hover {
    width: 8rem;
  }
`;

const ShopNowButton = styled.button`
position: absolute;
left: 20%;
top:70%;
tranform: translate(-50%,-50%)
padding: 1rem;
background-color:	#097969;
width: 10rem;
color: white;
font-weight: bold;
border:none;
height: 2.25rem;
`;

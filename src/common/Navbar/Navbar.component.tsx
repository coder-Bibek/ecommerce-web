import React, { FC } from "react";
import styled from "styled-components";
import { BellIcon, SearchIcon, ShoppingIcon } from "../../assets/Icons/Icons";

export const Navbar: FC = () => {
  const handleClick = () => {};

  return (
    <NavbarWrapper>
      <MainContentWrapper>
        <SearchWrapper>
          <LanguageWrapper>
            <option value="English">EN</option>
            <option value="Nepali">NEP</option>
          </LanguageWrapper>
          <LogoTitle>ECOMMERCE-FRONTEND</LogoTitle>
        </SearchWrapper>
        <SearchBoxWrapper>
          <SearchInput
            type="text"
            placeholder="search..."
            name="search"
          ></SearchInput>
          <SearchIcon onClick={handleClick}></SearchIcon>
        </SearchBoxWrapper>
        <CartWrapper>
          <BellIcon></BellIcon>
          <ShoppingIcon></ShoppingIcon>
        </CartWrapper>
      </MainContentWrapper>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background-color: #fff;
`;

const MainContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 3%;
  justify-content: space-between;
  @media (min-width: 576px) {
    margin: 0rem 3%;
  }
`;

const LogoTitle = styled.h1`
  font-size: 0.9rem;
  display: none;
  @media (min-width: 576px) {
    display: block;
    margin-left: 0.5rem;
  }
`;

const SearchWrapper = styled.section`
  display: flex;
  flex-directon: row;
  align-items: center;
  @media (min-width: 576px) {
    width: 15rem;
  }
`;

const SearchBoxWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LanguageWrapper = styled.select`
  font-size: 0.7rem;
  height: 1.5rem;
  margin: 0rem 2%;
`;

const SearchInput = styled.input`
  height: 1.55rem;
  margin-bottom: 0.1rem;
  margin: 0rem 1%;
  position: relative;
  @media (min-width: 576px) {
    width: 15rem;
    padding: 0.1rem;
  }
`;

const CartWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

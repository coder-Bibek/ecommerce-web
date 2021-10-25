import React, { FC } from "react";
import { Link } from "react-router-dom";
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
          <LogoWrapper>
            <Link to="/">EF</Link>
          </LogoWrapper>
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
  background-color: whitesmoke;
  padding: 0.75rem;
`;

const MainContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchWrapper = styled.section`
  display: flex;
  flex-directon: row;
  align-items: center;
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
  margin: 0rem 1%;
`;

const LogoWrapper = styled.section`
  display: none;
`;

const SearchInput = styled.input`
  height: 1.15rem;
  margin-bottom: 0.1rem;
  margin: 0rem 0.3%;
`;

const CartWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

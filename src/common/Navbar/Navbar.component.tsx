import React, { FC } from "react";
import styled from "styled-components";

export const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <MainContentWrapper>
        <SearchWrapper>
          <LanguageWrapper>
            <option value="English">EN</option>
            <option value="Nepali">NEP</option>
          </LanguageWrapper>
        </SearchWrapper>
      </MainContentWrapper>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background-color: whitesmoke;
  padding: 1rem;
`;
const MainContentWrapper = styled.section``;

const SearchWrapper = styled.nav``;

const LanguageWrapper = styled.select``;

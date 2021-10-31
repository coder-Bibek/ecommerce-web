import { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        Hurry up! and Place your orders at discount of <strong>50%</strong>
      </HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #5d3fd3;
  line-height: 1.5rem;
  height: 1.3rem;
  padding: 1rem;
  text-align: center;
  @media (min-width: 576px){
    height: 0.5rem;
  }
`;

const HeaderTitle = styled.p`
  color: #fff;
  font-size: 0.9rem;
  margin-top: -0.8rem;
`;

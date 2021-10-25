import { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>win exciting prizes at discount of 50%</HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: #5d3fd3;
  height: 0.2rem;
  padding: 1rem;
  text-align: center;
`;
const HeaderTitle = styled.p`
  color: #fff;
  margin-top: -0.75rem;
`;

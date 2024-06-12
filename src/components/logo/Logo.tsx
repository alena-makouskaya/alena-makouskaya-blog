import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <span>Alena</span>
      <span>Makouskaya</span>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  gap: 2px;

  span {
    font-family: "Inter";
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 1.28px;
    text-transform: uppercase;

    color: ${theme.colors.lightTheme.text.textPrimary};
  }

  span:nth-of-type(odd) {
    font-weight: 400;
  }
  
  span:nth-of-type(even) {
    font-weight: 200;
  }
`;


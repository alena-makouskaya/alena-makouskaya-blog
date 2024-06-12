import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const FooterLogo = () => {
  return (
    <StyledFooterLogo href="">
      <span>Alena</span>
      <span>Makouskaya</span>
    </StyledFooterLogo>
  );
};

const StyledFooterLogo = styled.a`
  display: flex;
  gap: 2px;

  span {
    font-family: "Inter";
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 1.28px;
    text-transform: uppercase;

    color: ${theme.colors.lightTheme.text.textOnColor};
  }

  span:nth-of-type(odd) {
    font-weight: 400;
  }
  
  span:nth-of-type(even) {
    font-weight: 200;
  }
`;

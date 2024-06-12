import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FooterLogo } from "../../../components/logo/FooterLogo";

export const FooterAbout = () => {
  return (
    <StyledFooterAbout>
      <FooterLogoContainer>
        <FooterLogo />
      </FooterLogoContainer>

      <FooterLinks>
        <a href="">App design</a>
        <a href="">Design system</a>
        <a href="">Web app development</a>
        <a href="">...and more articles</a>
      </FooterLinks>
    </StyledFooterAbout>
  );
};

const StyledFooterAbout = styled.div`
  display: flex;
  flex-direction: column;  


  max-width: 760px;
  width: 100%;

  border-right: 1px solid ${theme.colors.darkTheme.border};
`;

const FooterLogoContainer = styled.div`
  padding: 40px 80px 40px 0;

  height: 168px;

`;

const FooterLinks = styled.div`
  display: flex;
  gap: 32px;

  padding: 16px 80px 16px 0;

  a {
    font-family: "Inter";
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0.14px;
    color: ${theme.colors.lightTheme.text.textOnColor};
  }
`;

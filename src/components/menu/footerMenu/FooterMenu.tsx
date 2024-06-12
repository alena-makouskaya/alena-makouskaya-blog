import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const FooterMenu = () => {
  return (
    <StyledFooterMenu>
      <FooterMenuList>
        <FooterMenuListItem>
          <FooterMenuLink href="">Articles</FooterMenuLink>
        </FooterMenuListItem>

        <FooterMenuListItem>
          <FooterMenuLink href="">Case Studies</FooterMenuLink>
        </FooterMenuListItem>

        <FooterMenuListItem>
          <FooterMenuLink href="">About</FooterMenuLink>
        </FooterMenuListItem>
        
      </FooterMenuList>
    </StyledFooterMenu>
  );
};

const StyledFooterMenu = styled.nav``;

const FooterMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const FooterMenuListItem = styled.li``;

const FooterMenuLink = styled.a`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textOnColor};
`;

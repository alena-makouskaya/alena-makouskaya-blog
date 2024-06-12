import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <HeaderMenuList>
        <HeaderMenuItem>
          <HeaderMenuLink href="/articles">Articles</HeaderMenuLink>
        </HeaderMenuItem>

        <HeaderMenuItem>
          <HeaderMenuLink href="/case_studies">Case Studies</HeaderMenuLink>
        </HeaderMenuItem>

        <HeaderMenuItem>
          <HeaderMenuLink href="/about">About</HeaderMenuLink>
        </HeaderMenuItem>
      </HeaderMenuList>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.medium} {
    display: none;
  }
`;

const HeaderMenuList = styled.ul`
  display: flex;
  gap: 32px;
`;
const HeaderMenuItem = styled.li`

`;

const HeaderMenuLink = styled.a`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

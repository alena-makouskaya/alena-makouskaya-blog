import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Icon } from "../../../icon/Icon";

export const LargeMenu = () => {
  return (
    <StyledHeaderLargeMenu>
      <HeaderLargeMenuTitle isOpen={false}>Menu</HeaderLargeMenuTitle>

      <LargeMenuPopup isOpen={false}>
        <Icon iconId="close" width="24px" height="24px" viewBox="0 0 24 24" />

        <HeaderLargeMenuList>
          <HeaderLargeMenuItem>
            <HeaderLargeMenuLink href="">Articles</HeaderLargeMenuLink>
          </HeaderLargeMenuItem>

          <HeaderLargeMenuItem>
            <HeaderLargeMenuLink href="">Case Studies</HeaderLargeMenuLink>
          </HeaderLargeMenuItem>

          <HeaderLargeMenuItem>
            <HeaderLargeMenuLink href="">About</HeaderLargeMenuLink>
          </HeaderLargeMenuItem>
        </HeaderLargeMenuList>
      </LargeMenuPopup>
    </StyledHeaderLargeMenu>
  );
};

const StyledHeaderLargeMenu = styled.nav`
  display: none;

  @media ${theme.media.medium} {
    display: block;
  }
`;

const HeaderLargeMenuTitle = styled.a<{ isOpen: boolean }>`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textPrimary};

  ${(props) => props.isOpen && css<{ isOpen: boolean }>``}
`;

const LargeMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${theme.colors.lightTheme.background};
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;

      gap: 48px;
      background-color: white;

      padding: 40px;
    `}
`;

const HeaderLargeMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeaderLargeMenuItem = styled.li`

`;
const HeaderLargeMenuLink = styled.a`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "../../components/menu/headerMenu/HeaderMenu";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Icon } from "../../components/icon/Icon";
import { LargeMenu } from "../../components/menu/headerMenu/largeMenu/LargeMenu";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          <FlexWrapper align="center" gap="40px">
            <HeaderMenu />
            <LargeMenu />
            <ToogleTheme>
                <Icon iconId="sun" />
            </ToogleTheme>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 24px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;

  background: ${theme.colors.lightTheme.background.backgroundLight};
  border-bottom: 1px solid ${theme.colors.lightTheme.border};
`;

const ToogleTheme = styled.div`
    display: flex;
    padding: 3px 6px;
    width: 48px;
    background: #FAFAFA;
    border: 1px solid #E1E1E1;
    border-radius: 50px;
`

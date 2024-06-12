import React from "react";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { FooterAbout}from "./footerAbout/FooterAbout";
import { FooterNav } from "./footerNav/FooterNav";
import styled from "styled-components";
import { theme } from "../../styles/Theme";


export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper>
            <FooterAbout />
            <FooterNav />

        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    
    background: ${theme.colors.lightTheme.background.backgroundDark};
`

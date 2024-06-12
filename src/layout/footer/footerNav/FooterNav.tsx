import React from "react";
import styled from "styled-components";
import { FooterMenu } from "../../../components/menu/footerMenu/FooterMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { FooterSMM } from "./footerSMM/FooterSMM";
import { theme } from "../../../styles/Theme";

export const FooterNav = () => {
  return (
    <StyledFooterNav>
      <FooterMenuContainer>
        <FooterMenu />
      </FooterMenuContainer>

      <FooterSMM />
    </StyledFooterNav>
  );
};

const StyledFooterNav = styled.div`
  max-width: 360px;
  width: 100%;
`;

const FooterMenuContainer = styled.div`
  padding: 40px 0 40px 48px;

  border-bottom: 1px solid ${theme.colors.darkTheme.border};

`;

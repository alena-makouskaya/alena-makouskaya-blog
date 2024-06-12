import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

import authorImg from "./../../assets/images/alena-makouskaya.webp";
import { theme } from "../../styles/Theme";
import { SidebarMenu } from "../../components/menu/sidebarMenu/SidebarMenu";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <FlexWrapper direction="column" gap="32px">
        <AuthorInfo>
          <AuthorImg src={authorImg} />
          <AuthorDetails>
            <AuthorHeading>Alena Makouskaya</AuthorHeading>
            <AuthorDescription>UX/UI Designer</AuthorDescription>
          </AuthorDetails>
        </AuthorInfo>

        <SidebarMenu />
      </FlexWrapper>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  padding: 40px 0 40px 48px;

  max-width: 360px;
  width: 100%;

  position: sticky;
  top: 80px;

  @media ${theme.media.large} {
    padding: 40px 0 40px 40px;

    max-width: 304px;
    width: 100%;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }
`;
const AuthorInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AuthorImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;

  border-radius: 100%;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const AuthorHeading = styled.h4`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.14px;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;
const AuthorDescription = styled.h4`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.14px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

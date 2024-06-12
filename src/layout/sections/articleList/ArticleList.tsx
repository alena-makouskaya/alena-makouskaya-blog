import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { ArticleCard } from "../../../components/articleCard/ArticleCard";
import { Route, Routes } from "react-router-dom";
import { AdaptiveSidebarMenu } from "../../../components/menu/sidebarMenu/adaptiveSidebarMenu/SidebarMenu";

export const ArticleList = () => {
  return (
    <StyledArticleList>
      <FlexWrapper direction="column" gap="40px">
      <AdaptiveSidebarMenu />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </FlexWrapper>
    </StyledArticleList>
  );
};

const StyledArticleList = styled.section`
  padding: 40px 80px 240px 0;

  max-width: 760px;
  width: 100%;

  border-right: 1px solid ${theme.colors.lightTheme.border};

  @media ${theme.media.large} {
    padding: 40px 40px 240px 0;

    max-width: 656px;
    width: 100%;

  }


  @media  screen and (max-width: 880px)  {
    max-width: 100%;
    border-right: none;
  }
`;

import React from "react";
import styled from "styled-components";
import { HeroSection } from "../layout/sections/heroSection/HeroSection";
import { ArticleHeader } from "../layout/pageHeader/articlesHeader/ArticlesHeader";
import { ContentSection } from "../layout/sections/contentSection/ContentSection";

export const ArticlesPage = () => {
  return (
    <StyledArticlesPage>
      <ArticleHeader
        pageTitle="Articles"
        articleCategory=" #All categories"
        pageDescription="The branding process includes six crucial phases that need to be undertaken to boost a business.  Dive into our guide to get an utter understanding of them."
      />
      <ContentSection />
    </StyledArticlesPage>
  );
};

const StyledArticlesPage = styled.main``;

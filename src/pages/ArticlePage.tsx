import React from "react";
import styled from "styled-components";
import { ArticleHeader } from "../layout/pageHeader/articleHeader.tsx/ArticleHeader";
import { ArticleContent } from "../layout/sections/contentSection/ArticleContent";

export const ArticlePage = () => {
  return (
    <StyledArticlePage>
      <ArticleHeader
        articleCategory="ui design"
        pageTitle="Typography in UX/UI: A Complete Guide"
        pageDescription="Have you ever considered the correlation between the meaning and the overall look and feel of the text?"
        articleDate="Jun 11, 2024"
        timeToRead="16 min read"
      />

        <ArticleContent />
    </StyledArticlePage>
  );
};

const StyledArticlePage = styled.main``;

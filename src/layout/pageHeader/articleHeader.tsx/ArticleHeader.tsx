import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

type ArticleHeaderPropsType = {
  articleCategory?: string;
  pageTitle?: string;
  pageDescription?: string;
  articleDate?: string;
  timeToRead?: string;
};

export const ArticleHeader = (props: ArticleHeaderPropsType) => {
  return (
    <StyledArticleHeader>
      <Container>
        <FlexWrapper direction="column">
          <FlexWrapper>
            <ArticleLabel>{props.articleCategory}</ArticleLabel>
          </FlexWrapper>

          <ArticleTitle>{props.pageTitle}</ArticleTitle>

          <ArticleDescription>{props.pageDescription}</ArticleDescription>

          <FlexWrapper gap="8px" align="center">
            <ArticleInfo>{props.articleDate}</ArticleInfo>
            <Dot />
            <ArticleInfo>{props.timeToRead}</ArticleInfo>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledArticleHeader>
  );
};

const StyledArticleHeader = styled.section`
  padding: 160px 0 80px;
  min-height: 380px;
`;

const ArticleLabel = styled.span`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textTertiary};

  margin-bottom: 4px;
`;

const ArticleTitle = styled.h1`
  font-family: "Inter";
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};

  margin: 16px 0;

  span {
    color: ${theme.colors.lightTheme.text.textSecondary};
  }
`;

const ArticleDescription = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textSecondary};

  max-width: 720px;

  margin-bottom: 24px;
`;

const ArticleInfo = styled.span`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

const Dot = styled.div`
    width: 2px;
    height: 2px;
    border-radius: 50%;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

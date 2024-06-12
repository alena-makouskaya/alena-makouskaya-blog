import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";


export const ArticleCard = () => {
  return (
    <StyledArticle>
      <FlexWrapper
        direction="column"
        justify="center"
        align="center"
        gap="16px"
        grow="1"
      >
        <Framer>
          <Icon
            width="24px"
            height="24px"
            viewBox="0 0 24px 24px"
            iconId="layout"
          />
        </Framer>
        <Divider />
      </FlexWrapper>

      <FlexWrapper direction="column" gap="16px">
        <ArticleHeader>
          <ArticleLabel>ui design</ArticleLabel>
          <ArticleTitle>6 Crucial Stages of Branding Process</ArticleTitle>
        </ArticleHeader>

        <ArticleDescription>
          A lot has been said about the importance of a well-maintained brand
          identity. Companies worldwide, regardless of niche, scale, and target
          market, consider...
        </ArticleDescription>

        <ArticleFigure>
          <img src="" />
        </ArticleFigure>

        <ArticleFooter>
          <ArticleDate>Mar 23, 2024</ArticleDate>

          <ArticleReadTime>
            <Icon iconId="timer" />
            <p>16 min read</p>
          </ArticleReadTime>
        </ArticleFooter>
      </FlexWrapper>
    </StyledArticle>
  );
};

const StyledArticle = styled.a`
  display: flex;
  gap: 24px;
`;

const ArticleHeader = styled.header``;

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

const ArticleTitle = styled.h3`
  font-family: "Inter";
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  letter-spacing: 0.2px;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

const ArticleDescription = styled.h3`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.16px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

const ArticleFigure = styled.figure`
  align-self: stretch;
  height: 256px;
  border: 1px solid rgba(0, 209, 255, 0.1);
  background: linear-gradient(
    111deg,
    rgba(0, 209, 255, 0.03) -4.45%,
    rgba(255, 255, 255, 0.1) 45.34%
  );

  border-radius: 8px;

  img{
    height: 256px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;



const ArticleFooter = styled.footer`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;

const ArticleDate = styled.p`
  font-family: "Inter";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.14px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

const ArticleReadTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.lightTheme.text.textSecondary};

  p {
    font-family: "Inter";
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.14px;

    color: ${theme.colors.lightTheme.text.textSecondary};
  }
`;

const Framer = styled.div`
  display: flex;
  padding: 8px;

  border: 1px solid ${theme.colors.lightTheme.border};
  border-radius: 100%;
`;
const Divider = styled.div`
  width: 1px;
  height: 1px;
  flex-grow: 1;

  color: ${theme.colors.lightTheme.border};
 
`;

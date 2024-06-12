import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/container/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

type ArticleHeaderPropsType = {
    pageTitle?: string,
    articleCategory?: string,
    pageDescription?: string
}

export const ArticleHeader = (props: ArticleHeaderPropsType) => {
    return (
        <StyledArticleHeader>
            <Container>
                <FlexWrapper direction="column">
                    <PageTitle>
                        {props.pageTitle}
                        <span>{props.articleCategory}</span>
                    </PageTitle>

                    <PageDescription>{props.pageDescription}</PageDescription>

                </FlexWrapper>
            </Container>
            
        </StyledArticleHeader>
    );
};

const StyledArticleHeader = styled.section`
  padding: 160px 0 80px;
  min-height: 380px;
    
`


const PageTitle = styled.h1`

  font-family: "Inter";
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};

  margin: 8px 0 24px;

  span{
    color: ${theme.colors.lightTheme.text.textSecondary};

  }
`;

const PageDescription = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textSecondary};

  max-width: 720px;
`;



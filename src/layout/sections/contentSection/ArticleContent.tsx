import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ArticleList } from "../articleList/ArticleList";
import { Sidebar } from "../../sidebar/Sidebar";
import { theme } from "../../../styles/Theme";
import { Article } from "../article/Article";

export const ArticleContent = () => {
  return (
    <StyledArticleContent>
      <Container>
        <FlexWrapper>
          <Article />
          <Sidebar />
        </FlexWrapper>
      </Container>
    </StyledArticleContent>
  );
};

const StyledArticleContent= styled.section`



`;

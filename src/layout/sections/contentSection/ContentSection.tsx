import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ArticleList } from "../articleList/ArticleList";
import { Sidebar } from "../../sidebar/Sidebar";
import { theme } from "../../../styles/Theme";
import { AdaptiveSidebarMenu } from "../../../components/menu/sidebarMenu/adaptiveSidebarMenu/SidebarMenu";

export const ContentSection = () => {
  return (
    <StyledContentSection>
      <Container>
        <FlexWrapper >
          <ArticleList />
          <Sidebar />
          
        </FlexWrapper>
      </Container>
    </StyledContentSection>
  );
};

const StyledContentSection = styled.section``;

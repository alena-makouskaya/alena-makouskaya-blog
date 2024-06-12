import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SidebarAbout } from "../../sidebar/sidebarAbout/SidebarAbout";
import { About } from "../about/About";

export const AboutContent = () => {
  return (
    <StyledAboutContent>
      <Container>
        <FlexWrapper>
          <About />

          <SidebarAbout />
        </FlexWrapper>
      </Container>
    </StyledAboutContent>
  );
};

const StyledAboutContent = styled.div``;

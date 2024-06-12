import React from "react";
import styled from "styled-components";
import { HeroSection } from "../layout/sections/heroSection/HeroSection";
import { ContentSection } from "../layout/sections/contentSection/ContentSection";

export const MainPage = () => {
  return (
    <StyledMainPage>
      <HeroSection
        heroLabel="about this blog"
        heroTitle="Articles on Software Engineering,
            Product Development, UX/UI Design, and more"
        heroDescription=" Stories, insights, and advice that will transform how you design and
            build for the web."
      />
      
      <ContentSection />
    </StyledMainPage>
  );
};

const StyledMainPage = styled.main``;

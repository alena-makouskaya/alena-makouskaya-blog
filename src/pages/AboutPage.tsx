import React from "react";
import styled from "styled-components";
import { AboutContent } from "../layout/sections/contentSection/AboutContent";

export const AboutPage = () => {
  return (
    <StyledAboutPage>
      <AboutContent />
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.main``;

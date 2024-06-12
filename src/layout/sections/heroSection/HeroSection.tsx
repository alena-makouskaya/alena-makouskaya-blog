import React from "react";
import styled from "styled-components";
import { Container } from "../../../components/container/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

type HeroSectionPropsType = {
  heroLabel?: string;
  heroTitle?: string;
  heroDescription?: string;
};

export const HeroSection = (props: HeroSectionPropsType) => {
  return (
    <StyledHeroSection>
      <Container>
        <FlexWrapper direction="column">
          <HeroLabel>{props.heroLabel}</HeroLabel>
          <HeroTitle>{props.heroTitle}</HeroTitle>
          <HeroDescription>{props.heroDescription}</HeroDescription>
        </FlexWrapper>
      </Container>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.section`
  padding: 160px 0 80px;
  min-height: 380px;

  @media ${theme.media.medium} {
  }
`;

const HeroLabel = styled.span`
  font-family: "Inter";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.56px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textTertiary};
`;

const HeroTitle = styled.h1`
  /*${font({
    family: "Inter",
    weight: 800,
    Fmax: 40,
    Fmin: 24,
    lineHeight: "48px",
  })}*/

  font-family: "Inter";
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};

  margin: 8px 0 24px;

  max-width: 780px;

  @media ${theme.media.medium} {
    font-size: 32px;
    line-height: 40px;
    
  }
`;

const HeroDescription = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

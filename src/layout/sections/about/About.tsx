import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper direction="column" gap="40px">
        <FlexWrapper direction="column" gap="24px">
          <Heading02>Hi, I’m Alena Makouskaya</Heading02>
          <Text>
            Before defining the brand process, it is vital to understand what is
            brand and brand identity. Although they are often treated
            interchangeably, however, they are not the same thing. So, what is
            what? The brand is a marketing term that identifies the company,
            distinguishes it in consumers' minds, shapes people's perceptions,
            and provides a competitive edge. Brand identity is a collection of
            visible elements that a company creates to establish the right image
            of the brand and increase its recognition. It can be a logotype,
            typeface, mascot, slogan, website design, digital newsletter, flyer,
            brochure, and all other things, including advertising and
            stationery.
          </Text>
        </FlexWrapper>

        <FlexWrapper direction="column" gap="24px">
          <Heading03>Background</Heading03>
          <Text>
            Brand identity comes with numerous benefits that may literally
            change your company's destiny and set you into a successful
            trajectory regardless of age, niche, scale and, market. However, to
            unlock its potential, it is essential to see through the entire
            branding process.
          </Text>
        </FlexWrapper>

        <FlexWrapper direction="column" gap="24px">
          <Heading03>Objectives</Heading03>
          <Text>
            <ul>
              <li>prolong the life of the company,</li>
              <li>give it a competitive advantage over others,</li>
              <li>
                advance the overall progress and make the world a better place
                with quality services, products, and brand image.
              </li>
            </ul>
          </Text>
        </FlexWrapper>


        <FlexWrapper direction="column" gap="24px">
          <Heading03>Process</Heading03>
          <Text>
          <ul>
              <li>prolong the life of the company,</li>
              <li>give it a competitive advantage over others,</li>
              <li>
              unlock potential,
              </li>
            </ul>
          </Text>
        </FlexWrapper>


        <FlexWrapper direction="column" gap="24px">
          <Heading03>Process</Heading03>
          <Text>
          <ul>
              <li>prolong the life of the company,</li>
              <li>give it a competitive advantage over others,</li>
              <li>
              unlock potential,
              </li>
            </ul>
          </Text>
        </FlexWrapper>


        <FlexWrapper direction="column" gap="24px">
          <Heading03>Process</Heading03>
          <Text>
          <ul>
              <li>prolong the life of the company,</li>
              <li>give it a competitive advantage over others,</li>
              <li>
              unlock potential,
              </li>
            </ul>
          </Text>
        </FlexWrapper>


        <FlexWrapper direction="column" gap="24px">
          <Heading03>Process</Heading03>
          <Text>
          <ul>
              <li>prolong the life of the company,</li>
              <li>give it a competitive advantage over others,</li>
              <li>
              unlock potential,
              </li>
            </ul>
          </Text>
        </FlexWrapper>

      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  padding: 160px 80px 240px 0;

  max-width: 760px;
  width: 100%;

  border-right: 1px solid ${theme.colors.lightTheme.border};

  @media ${theme.media.large} {
    padding: 40px 40px 240px 0;

    max-width: 656px;
    width: 100%;
  }

  @media ${theme.media.medium} {
    max-width: 100%;
    border-right: none;
  }
`;

const Heading02 = styled.h2`
  font-family: "Inter";
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

const Heading03 = styled.h3`
  font-family: "Inter";
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

const Text = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;

  color: ${theme.colors.lightTheme.text.textSecondary};

  letter-spacing: 0.16px;
`;

import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";

export const Article = () => {
  return (
    <StyledArticle>
      <FlexWrapper direction="column" gap="40px">

        <FlexWrapper direction="column" gap="0px">
          <Heading02>What is typography</Heading02>
          <Text>
            Typography is the art of arranging letters and text to make the
            textual content legible, easily digestible, and visually appealing
            to the reader.
          </Text>
          <Text>
            In whichever product you use (especially digital ones) a designer
            (or a whole design team) carefully and strategically agreed upon a
            font style, size, and structure to deepen and convey the text’s
            message.
          </Text>
        </FlexWrapper>

        <FlexWrapper direction="column" gap="0px">
          <Heading02>The key elements of typography</Heading02>
          <Text>
            There are several aspects of typography you need to know about:
            typefaces and fonts, white spaces, tracking, kerning, consistency,
            hierarchy, alignment, color, and contrast.
          </Text>

          <Heading03>Typefaces and fonts</Heading03>
          <Text>
            If you’re a design newbie, you’re probably confused and trying to
            understand the distinction between typefaces and fonts.
          </Text>

          <Text>
            A font is a graphical representation of text characters. A typeface
            is a design style that consists of multiple characters, which vary
            in weight and size. It is like “a family” of fonts which differ in
            weight, width, and style.
          </Text>

          <Heading03>White space</Heading03>
          <Text>
            Another aspect of typography in UX/UI design is white space. White
            space is the empty space that surrounds the text, images or other
            graphics in interfaces. Mostly, it’s the color of the background.
            Designers alter white space around the text by adjusting margins,
            line spacing, or padding.
          </Text>
        </FlexWrapper>
        
        <FlexWrapper direction="column" gap="0px">
          <Heading02>The key elements of typography</Heading02>
          <Text>
            There are several aspects of typography you need to know about:
            typefaces and fonts, white spaces, tracking, kerning, consistency,
            hierarchy, alignment, color, and contrast.
          </Text>

          <Heading03>Typefaces and fonts</Heading03>
          <Text>
            If you’re a design newbie, you’re probably confused and trying to
            understand the distinction between typefaces and fonts.
          </Text>

          <Text>
            A font is a graphical representation of text characters. A typeface
            is a design style that consists of multiple characters, which vary
            in weight and size. It is like “a family” of fonts which differ in
            weight, width, and style.
          </Text>

          <Heading03>White space</Heading03>
          <Text>
            Another aspect of typography in UX/UI design is white space. White
            space is the empty space that surrounds the text, images or other
            graphics in interfaces. Mostly, it’s the color of the background.
            Designers alter white space around the text by adjusting margins,
            line spacing, or padding.
          </Text>
        </FlexWrapper>
      </FlexWrapper>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  padding: 40px 80px 240px 0;

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

  margin-bottom: 24px;
`;

const Heading03 = styled.h3`
  font-family: "Inter";
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  letter-spacing: 0.4px;

  color: ${theme.colors.lightTheme.text.textPrimary};

  margin-bottom: 24px;
`;

const Text = styled.p`
  font-family: "Inter";
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  font-weight: 400;

  color: ${theme.colors.lightTheme.text.textSecondary};

  letter-spacing: 0.16px;

  margin-bottom: 16px;
`;

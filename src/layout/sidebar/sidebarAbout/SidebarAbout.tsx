import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Tag } from "../../../components/tag/Tag";
import { Icon } from "../../../components/icon/Icon";

import author from "../../../assets/images/alena-makouskaya.webp";

export const SidebarAbout = () => {
  return (
    <StyledSidebarAbout>
      <FlexWrapper direction="column" gap="40px" >
        <AuthorInfo>
          <AuthorImg src={author} />
          <AuthorTitle>Alena Makouskaya</AuthorTitle>
        </AuthorInfo>

        <SidebarSection>
          <SectionTitle>Skills and tools</SectionTitle>

          <FlexWrapper gap="8px">
            <Tag tagTitle="Web Design" />
            <Tag tagTitle="Product Design" />
            <Tag tagTitle="Web Developer" />
          </FlexWrapper>
        </SidebarSection>

        <SidebarSection>
          <SectionTitle>About</SectionTitle>

          <Text>
            Experienced Web and Product Designer with a passion for turning
            ideas into stunning, user-friendly designs. With 6 years of
            expertise, I am well-equipped to bring your vision to life. Let's
            collaborate on creating the perfect product and design!
          </Text>

          <Location>
            <Icon
              iconId="location"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            />
            <Text>Minsk, Belarus</Text>
          </Location>

          <Languages>
            <Icon
              iconId="languages"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            />

            <FlexWrapper gap="8px" align="center">
              <Text>English</Text>
              <Text>French</Text>
              <Text>Italian</Text>
              <Text>Polish</Text>
            </FlexWrapper>
          </Languages>
        </SidebarSection>

        <SidebarSection>
            <SectionTitle>
                Links
            </SectionTitle>

            <FlexWrapper>
                <Icon iconId="twitter" width="24px" height="24px" viewBox="0 0 24 24" />
                <Icon iconId="linkedin" width="24px" height="24px" viewBox="0 0 24 24" />
                <Icon iconId="link" width="24px" height="24px" viewBox="0 0 24 24" />
            </FlexWrapper>

        </SidebarSection>
      </FlexWrapper>
    </StyledSidebarAbout>
  );
};

const StyledSidebarAbout = styled.aside`
  padding: 80px 0 40px 48px;

  max-width: 360px;
  width: 100%;

  position: sticky;
  top: 80px;

  @media ${theme.media.large} {
    padding: 40px 0 40px 40px;

    max-width: 304px;
    width: 100%;
  }

  @media ${theme.media.medium} {
    display: none;
  }
`;

const AuthorInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  
  gap: 24px;
`;

const AuthorImg = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;

  border-radius: 100%;
`;

const AuthorTitle = styled.h4`
  font-family: "Inter";
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0.2px;

  color: ${theme.colors.lightTheme.text.textPrimary};
`;

const SidebarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h5`
  font-family: "Inter";
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;

  letter-spacing: 0.96px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textTertiary};
`;

const Text = styled.p`
  font-family: "Inter";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  letter-spacing: 0.16px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

const Location = styled.div`
  display: flex;
  gap: 16px;
`;

const Languages = styled.div`
  display: flex;
  gap: 16px;
`;

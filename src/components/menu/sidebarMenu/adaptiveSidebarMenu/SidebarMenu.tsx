import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const AdaptiveSidebarMenu = () => {
  return (
    <StyledAdaptiveSidebarMenu>
      <SidebarMenuTitle>Browse by category</SidebarMenuTitle>

      <SidebarMenuList>
        <SidebarMenuItem>
          <SidebarMenuLink href="">All articles</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">UI Design</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">UX Design</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">HTML/CSS</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">SEO Optimization</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">WEB-Development</SidebarMenuLink>
        </SidebarMenuItem>

        <SidebarMenuItem>
          <SidebarMenuLink href="">Data Bases</SidebarMenuLink>
        </SidebarMenuItem>
      </SidebarMenuList>
    </StyledAdaptiveSidebarMenu>
  );
};

const StyledAdaptiveSidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-bottom: 16px;
  

  border-bottom: 1px solid ${theme.colors.lightTheme.border};

  display: none;

  @media screen and (max-width: 880px) {
    display: block;
  }
`;
const SidebarMenuTitle = styled.h5`
  font-family: "Inter";
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.48px;
  text-transform: uppercase;

  color: ${theme.colors.lightTheme.text.textTertiary};
`;

const SidebarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const SidebarMenuItem = styled.li``;

const SidebarMenuLink = styled.a`
  font-family: "Inter";
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  letter-spacing: 0.16px;

  color: ${theme.colors.lightTheme.text.textSecondary};
`;

import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const SidebarMenu = () => {
  return (
    <StyledSidebarMenu>
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
    </StyledSidebarMenu>
  );
};

const StyledSidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  flex-direction: column;
  gap: 8px;
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

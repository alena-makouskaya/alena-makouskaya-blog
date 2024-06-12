import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type TagPropsType = {
  tagTitle: string;
};

export const Tag = (props: TagPropsType) => {
  return (
    <StyledTag>
      <TagTitle>{props.tagTitle}</TagTitle>
    </StyledTag>
  );
};

const StyledTag = styled.div`
  padding: 4px 8px;
  background-color: ${theme.colors.lightTheme.background};

  border: 1px solid ${theme.colors.lightTheme.border};
  border-radius: 50px;
`;

const TagTitle = styled.div`
  font-family: "Inter";
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;


`;

import React from "react";
import styled from "styled-components";

const S = {};

S.FilledButton = styled.button`
  height: ${(p) => p.theme.size[48]};
  background-color: ${(p) => p.theme.color.primary.main};
  width: 100%;
  color: ${(p) => p.theme.color.dark};
  font-weight: 700;
  border-radius: 8px;
  box-shadow: ${(p) => p.theme.shadow.small};
  font-size: 1.1875em;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    font-size: 1em;
  }
`;

const FilledButton = ({ children, ...rest }) => {
  return <S.FilledButton {...rest}>{children}</S.FilledButton>;
};

export default FilledButton;

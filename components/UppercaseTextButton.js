import React from "react";
import styled from "styled-components";

const S = {};

S.UppercaseTextButton = styled.button`
  display: inline-flex;
  align-items: center;
  height: ${(p) => p.theme.size[48]};
  font-size: 1em;
  color: ${(p) => p.theme.color.lightMuted};
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const UppercaseTextButton = ({ children, ...rest }) => {
  return <S.UppercaseTextButton {...rest}>{children}</S.UppercaseTextButton>;
};

export default UppercaseTextButton;

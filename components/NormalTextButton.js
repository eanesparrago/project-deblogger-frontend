import React from "react";
import styled from "styled-components";

const S = {};

S.NormalTextButton = styled.button`
  display: inline-flex;
  align-items: center;
  height: ${(p) => p.theme.size[48]};
  font-size: 1.1875em;
  color: ${(p) => p.theme.color.lightMuted};
`;

const NormalTextButton = ({ children, ...rest }) => {
  return <S.NormalTextButton {...rest}>{children}</S.NormalTextButton>;
};

export default NormalTextButton;

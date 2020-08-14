import styled, { css } from "styled-components";

const S = {};

/*
Options
color - red
*/
const NormalTextButton = ({ children, ...rest }) => {
  return <S.NormalTextButton {...rest}>{children}</S.NormalTextButton>;
};

S.NormalTextButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: ${(p) => p.theme.size[48]};
  height: ${(p) => p.theme.size[48]};
  font-size: 1.1875em;
  color: ${(p) => p.theme.color.lightMuted};
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    font-size: 1em;
  }

  ${(p) =>
    p.color === "red" &&
    css`
      color: ${(p) => p.theme.color.red};
    `}
`;

export default NormalTextButton;

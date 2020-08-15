import styled, { css } from "styled-components";

/* 
Props
variant - "normal" (default), "muted", "cancel"
*/
const UppercaseTextButton = (props) => {
  const { children } = props;

  return <S.UppercaseTextButton {...props}>{children}</S.UppercaseTextButton>;
};

const S = {};

S.UppercaseTextButton = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${(p) => p.theme.size[48]};
  font-size: 1.1875em;
  color: ${(p) => p.theme.color.lightMuted};
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    font-size: 1em;
  }

  ${(p) =>
    p.variant === "muted" &&
    css`
      color: ${(p) => p.theme.color.grey};
    `}

  ${(p) =>
    p.variant === "cancel" &&
    css`
      color: ${(p) => p.theme.color.red};
    `}
`;

export default UppercaseTextButton;

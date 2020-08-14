import styled, { css } from "styled-components";

const S = {};

S.DebloggerLogo = styled.div`
  font-size: 2em;
  font-family: ${(p) => p.theme.font.serif};
  font-weight: 700;
  color: ${(p) => p.theme.color.primary.main};
  line-height: 100%;
  letter-spacing: -0.02em;

  ${(p) =>
    p.size === "large" &&
    css`
      font-size: 3em;
    `}

  ${(p) =>
    p.color === "white" &&
    css`
      color: ${(p) => p.theme.color.light};
    `}
`;

/*
Options
size - default, large
color - default, white
variant - default, initials
*/
const DebloggerLogo = (props) => {
  const { variant } = props;

  let text = "Deblogger";

  if (variant === "initials") {
    text = "DB";
  }

  return <S.DebloggerLogo {...props}>{text}</S.DebloggerLogo>;
};

export default DebloggerLogo;

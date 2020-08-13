import React from "react";
import styled from "styled-components";

const S = {};

S.DebloggerLogo = styled.div`
  font-size: 2em;
  font-family: ${(p) => p.theme.font.serif};
  font-weight: 700;
  color: ${(p) => p.theme.color.primary.main};
  line-height: 100%;
  letter-spacing: -0.02em;
`;

const DebloggerLogo = (props) => {
  const { variant } = props;

  let text = "Deblogger";

  if (variant === "initials") {
    text = "DB";
  }

  return <S.DebloggerLogo {...props}>{text}</S.DebloggerLogo>;
};

export default DebloggerLogo;

import styled from "styled-components";

const MutedText = (props) => {
  const { children } = props;

  return <S.MutedText {...props}>{children}</S.MutedText>;
};

const S = {};

S.MutedText = styled.div`
  color: ${(p) => p.theme.color.grey};
  font-size: 1em;
`;

export default MutedText;

import styled from "styled-components";

const MobileCategoryNav = () => {
  return <S.MobileCategoryNav></S.MobileCategoryNav>;
};

const S = {};

S.MobileCategoryNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(p) => p.theme.color.dark};
  z-index: 99;
`;

export default MobileCategoryNav;

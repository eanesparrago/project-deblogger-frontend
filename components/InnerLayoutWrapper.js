import styled from "styled-components";

const InnerLayout = (props) => {
  const { children } = props;

  return <S.InnerLayout {...props}>{children}</S.InnerLayout>;
};

const S = {};

S.InnerLayout = styled.div`
  margin: 0 auto;
  width: ${(p) => p.theme.size.free(1056)};
  padding-top: ${(p) => p.theme.size[64]};
  padding-bottom: ${(p) => p.theme.size[64]};
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size.free(80)};
    width: 62%;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
    width: 100%;
    padding-left: ${(p) => p.theme.size[96]};
    padding-right: ${(p) => p.theme.size[96]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size[16]};
  }
`;

export default InnerLayout;

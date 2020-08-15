import Head from "next/head";
import styled from "styled-components";

import PostCard from "components/PostCard";
import SearchBox from "components/SearchBox";
import InnerLayoutWrapper from "components/InnerLayoutWrapper";
import CommonLayout from "components/layouts/CommonLayout";

function HomePage() {
  return (
    <CommonLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <S.HomePage as="main">
        <div className="HomePage__widget-block">
          <SearchBox></SearchBox>
        </div>

        <section className="HomePage__PostCard-group">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </section>
      </S.HomePage>
    </CommonLayout>
  );
}

const S = {};

S.HomePage = styled.div`
  margin: 0 auto;
  width: ${(p) => p.theme.size.free(1056)};
  padding-top: ${(p) => p.theme.size[64]};
  transform: translateX(${(p) => p.theme.size[32]});
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size.free(80)};
    padding-left: ${(p) => p.theme.size[96]};
    padding-right: ${(p) => p.theme.size[96]};
    transform: none;
    width: unset;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size[16]};
  }

  .HomePage__widget-block {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .HomePage__widget-block {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .HomePage__PostCard-group {
    display: flex;
    flex-flow: row wrap;

    > * {
      width: calc(50% - ${(p) => p.theme.size[32]});
      margin-right: ${(p) => p.theme.size[32]};
      margin-bottom: ${(p) => p.theme.size[48]};

      @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
        margin-right: 0;
        width: 100%;
      }
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .HomePage__PostCard-group {
      > * {
        margin-right: unset;
        margin-bottom: ${(p) => p.theme.size[32]};
      }
    }
  }
`;

export default HomePage;

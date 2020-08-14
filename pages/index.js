import Head from "next/head";
import styled from "styled-components";

import PostCard from "components/PostCard";
import CommonLayout from "components/CommonLayout";

function HomePage() {
  return (
    <CommonLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <S.HomePage>
        <main className="HomePage__main">
          <div className="HomePage__widget-block">
            <S.SearchBox>
              <input type="text" placeholder="Search posts" />
            </S.SearchBox>
          </div>

          <section className="HomePage__PostCard-group">
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </section>
        </main>
      </S.HomePage>
    </CommonLayout>
  );
}

const S = {};

S.HomePage = styled.div`
  .HomePage__main {
    margin: 0 auto;
    width: ${(p) => p.theme.size.free(1088)};
    padding-top: ${(p) => p.theme.size[64]};
    transform: translateX(${(p) => p.theme.size[32]});
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .HomePage__main {
      padding-top: ${(p) => p.theme.size.free(80)};
      padding-left: ${(p) => p.theme.size[16]};
      padding-right: ${(p) => p.theme.size[16]};
      transform: none;
      width: unset;
    }
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
      margin-right: ${(p) => p.theme.size[32]};
      margin-bottom: ${(p) => p.theme.size[48]};
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

S.SearchBox = styled.div`
  & > input {
    border: 1px solid ${(p) => p.theme.color.grey};
    height: ${(p) => p.theme.size[48]};
    width: ${(p) => p.theme.size.free(256)};
    border-radius: 8px;
    padding-left: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    & > input {
      width: 100%;
    }
  }

  & > input:focus {
    border: 1px solid ${(p) => p.theme.color.lightMuted};
  }
`;

export default HomePage;

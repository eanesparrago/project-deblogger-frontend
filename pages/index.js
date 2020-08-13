import Head from "next/head";
import styled from "styled-components";

import PostCard from "components/PostCard";
import CommonLayout from "components/CommonLayout";

const S = {};

S.Home = styled.div`
  .Home__main {
    margin: 0 auto;
    width: ${(p) => p.theme.size.free(1088)};
    padding-top: ${(p) => p.theme.size[64]};
    transform: translateX(${(p) => p.theme.size[32]});
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Home__main {
      padding-top: ${(p) => p.theme.size.free(80)};
      padding-left: ${(p) => p.theme.size[16]};
      padding-right: ${(p) => p.theme.size[16]};
      transform: none;
      width: unset;
    }
  }

  .Home__widget-block {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Home__widget-block {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .Home__PostCard-group {
    display: flex;
    flex-flow: row wrap;

    > * {
      margin-right: ${(p) => p.theme.size[32]};
      margin-bottom: ${(p) => p.theme.size[48]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Home__PostCard-group {
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

export default function Home() {
  return (
    <CommonLayout>
      <Head>
        <title>Create Next App</title>
      </Head>

      <S.Home>
        <main className="Home__main">
          <div className="Home__widget-block">
            <S.SearchBox>
              <input type="text" placeholder="Search posts" />
            </S.SearchBox>
          </div>

          <section className="Home__PostCard-group">
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </section>
        </main>
      </S.Home>
    </CommonLayout>
  );
}

import Head from "next/head";
import styled from "styled-components";

import PostCard from "components/PostCard";
import UserAvatar from "components/UserAvatar";
import UserControls from "components/UserControls";

const S = {};

S.Home = styled.div`
  .Home__left-block {
    padding-top: ${(p) => p.theme.size[64]};
    position: fixed;
    top: 0;
    left: 0;
  }

  .Home__Logo {
    margin-bottom: ${(p) => p.theme.size[48]};
    margin-left: ${(p) => p.theme.size[96]};
  }

  .Home__main {
    margin: 0 auto;
    width: ${(p) => p.theme.size.free(1088)};
    padding-top: ${(p) => p.theme.size.free(64)};
    transform: translateX(${(p) => p.theme.size[32]});
  }

  .Home__widget-block {
    margin-bottom: ${(p) => p.theme.size[48]};
  }

  .Home__PostCard-group {
    display: flex;
    flex-flow: row wrap;

    & > * {
      margin-right: ${(p) => p.theme.size[32]};
      margin-bottom: ${(p) => p.theme.size[48]};
    }
  }

  .Home__UserControls {
    position: fixed;
    top: ${(p) => p.theme.size[64]};
    right: ${(p) => p.theme.size[48]};
  }
`;

S.Logo = styled.div`
  font-size: 2em;
  font-family: ${(p) => p.theme.font.serif};
  font-weight: 700;
  color: ${(p) => p.theme.color.primary.main};
  line-height: 100%;
  letter-spacing: -0.02em;
`;

S.Navbar = styled.nav`
  & > a {
    display: flex;
    height: ${(p) => p.theme.size[48]};
    width: ${(p) => p.theme.size.free(288)};
    padding-left: ${(p) => p.theme.size.free(128)};
    border: 1px solid ${(p) => p.theme.color.blue}80;
    border-radius: 4px;
    transform: translateX(-${(p) => p.theme.size[32]});
    align-items: center;
    font-size: 1.1875em;
    line-height: 100%;
    color: ${(p) => p.theme.color.light};
  }

  & > a:not(:last-child) {
    margin-bottom: ${(p) => p.theme.size[12]};
  }

  .Navbar__homepage {
    border: none;
  }

  .Navbar__homepage--active {
    color: ${(p) => p.theme.color.primary.main};
    font-weight: 700;
  }

  .Navbar__development {
    border: 1px solid ${(p) => p.theme.color.blue}80;
  }

  .Navbar__development--active {
    background-color: ${(p) => p.theme.color.blue};
  }

  .Navbar__design {
    border: 1px solid ${(p) => p.theme.color.red}80;
  }

  .Navbar__design--active {
    background-color: ${(p) => p.theme.color.red};
  }

  .Navbar__lesson {
    border: 1px solid ${(p) => p.theme.color.lime}80;
  }

  .Navbar__lesson--active {
    background-color: ${(p) => p.theme.color.lime};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__showcase {
    border: 1px solid ${(p) => p.theme.color.amber}80;
  }

  .Navbar__showcase--active {
    background-color: ${(p) => p.theme.color.amber};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__devLife {
    border: 1px solid ${(p) => p.theme.color.green}80;
  }

  .Navbar__devLife--active {
    background-color: ${(p) => p.theme.color.green};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__random {
    border: 1px solid ${(p) => p.theme.color.purple}80;
  }

  .Navbar__random--active {
    background-color: ${(p) => p.theme.color.purple};
    color: ${(p) => p.theme.color.light};
  }

  .Navbar__meta {
    border: 1px solid ${(p) => p.theme.color.light}80;
  }

  .Navbar__meta--active {
    background-color: ${(p) => p.theme.color.light};
    color: ${(p) => p.theme.color.dark};
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

  & > input:focus {
    border: 1px solid ${(p) => p.theme.color.lightMuted};
  }
`;

export default function Home() {
  return (
    <S.Home>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="Home__left-block">
        <S.Logo className="Home__Logo">Deblogger</S.Logo>

        <S.Navbar>
          <a href="/" className="Navbar__homepage Navbar__homepage--active">
            Homepage
          </a>
          <a
            href="/"
            className="Navbar__development Navbar__development--active"
          >
            Development
          </a>
          <a href="/" className="Navbar__design Navbar__design--active">
            Design
          </a>
          <a href="/" className="Navbar__lesson Navbar__lesson--active">
            Lesson
          </a>
          <a href="/" className="Navbar__showcase Navbar__showcase--active">
            Showcase
          </a>
          <a href="/" className="Navbar__devLife Navbar__devLife--active">
            Dev Life
          </a>
          <a href="/" className="Navbar__random Navbar__random--active">
            Random
          </a>
          <a href="/" className="Navbar__meta Navbar__meta--active">
            Meta
          </a>
        </S.Navbar>
      </div>

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

      <UserControls as="section" className="Home__UserControls"></UserControls>
    </S.Home>
  );
}

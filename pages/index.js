import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import PostCard from "components/PostCard";
import Navbar from "components/Navbar";
import UserControls from "components/UserControls";
import DebloggerLogo from "components/DebloggerLogo";
import UppercaseTextButton from "components/UppercaseTextButton";

const S = {};

S.Home = styled.div`
  .Home__left-block {
    padding-top: ${(p) => p.theme.size[64]};
    position: fixed;
    top: 0;
    left: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Home__left-block {
      display: none;
    }
  }

  .Home__DebloggerLogo {
    margin-bottom: ${(p) => p.theme.size[48]};
    margin-left: ${(p) => p.theme.size[96]};
  }

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

  .Home__UserControls {
    position: fixed;
    top: ${(p) => p.theme.size[64]};
    right: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Home__UserControls {
      display: none;
    }
  }

  .Home__MobileHeader {
    display: none;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Home__MobileHeader {
      display: flex;
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

S.MobileHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: ${(p) => p.theme.size[64]};
  background-color: ${(p) => p.theme.color.dark};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 ${(p) => p.theme.size[16]};
  z-index: 100;

  .MobileHeader__pageLabel-button {
    font-size: 1.1875em;
    font-weight: 700;
    color: ${(p) => p.theme.color.primary.main};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    height: ${(p) => p.theme.size[48]};
  }
`;

export default function Home() {
  return (
    <S.Home>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="Home__left-block">
        <DebloggerLogo className="Home__DebloggerLogo">Deblogger</DebloggerLogo>

        <Navbar></Navbar>
      </div>

      <S.MobileHeader as="header" className="Home__MobileHeader">
        <DebloggerLogo variant="initials"></DebloggerLogo>

        <button className="MobileHeader__pageLabel-button">Homepage</button>

        <Link href="/sign-in" passHref={true}>
          <a>
            <UppercaseTextButton className="MobileHeader__UppercaseTextButton">
              Sign In
            </UppercaseTextButton>
          </a>
        </Link>
      </S.MobileHeader>

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

import styled from "styled-components";
import Link from "next/link";

import UserControls from "components/UserControls";
import DebloggerLogo from "components/DebloggerLogo";
import UppercaseTextButton from "components/UppercaseTextButton";
import Navbar from "components/Navbar";

const S = {};

S.CommonLayout = styled.div`
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
  @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
    .Home__DebloggerLogo {
      margin-left: ${(p) => p.theme.size[48]};
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

const CommonLayout = (props) => {
  const { children } = props;

  return (
    <S.CommonLayout>
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

      {children}

      <UserControls as="section" className="Home__UserControls"></UserControls>
    </S.CommonLayout>
  );
};

export default CommonLayout;

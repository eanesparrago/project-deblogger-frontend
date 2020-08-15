import styled from "styled-components";
import Link from "next/link";

import UserControls from "components/UserControls";
import DebloggerLogo from "components/DebloggerLogo";
import UppercaseTextButton from "components/buttons/UppercaseTextButton";
import Navbar from "components/Navbar";

/*
Props
variant - "normal" (default), "dashboard"
*/
const CommonLayout = (props) => {
  const { children, variant = "normal" } = props;

  const navbar = variant === "dashboard" ? null : <Navbar></Navbar>;

  return (
    <S.CommonLayout>
      <div className="CommonLayout__left-block">
        <Link href="/">
          <a className="CommonLayout__DebloggerLogo">
            <DebloggerLogo color={variant === "dashboard" ? "white" : null}>
              Deblogger
            </DebloggerLogo>
          </a>
        </Link>

        {navbar}
      </div>

      <S.MobileHeader as="header" className="CommonLayout__MobileHeader">
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

      <UserControls
        as="section"
        className="CommonLayout__UserControls"
      ></UserControls>
    </S.CommonLayout>
  );
};

const S = {};

S.CommonLayout = styled.div`
  .CommonLayout__left-block {
    padding-top: ${(p) => p.theme.size[64]};
    position: fixed;
    top: 0;
    left: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .CommonLayout__left-block {
      display: none;
    }
  }

  .CommonLayout__DebloggerLogo {
    display: inline-block;
    margin-bottom: ${(p) => p.theme.size[48]};
    margin-left: ${(p) => p.theme.size[96]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
    .CommonLayout__DebloggerLogo {
      margin-left: ${(p) => p.theme.size[48]};
    }
  }

  .CommonLayout__UserControls {
    position: fixed;
    top: ${(p) => p.theme.size[64]};
    right: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .CommonLayout__UserControls {
      display: none;
    }
  }

  .CommonLayout__MobileHeader {
    display: none;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .CommonLayout__MobileHeader {
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

export default CommonLayout;

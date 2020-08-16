import styled from "styled-components";
import Link from "next/link";

import UserControls from "components/UserControls";
import DebloggerLogo from "components/DebloggerLogo";
import Navbar from "components/Navbar";
import MobileHeader from "components/MobileHeader";

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

      <MobileHeader
        as="header"
        className="CommonLayout__MobileHeader"
      ></MobileHeader>

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

export default CommonLayout;

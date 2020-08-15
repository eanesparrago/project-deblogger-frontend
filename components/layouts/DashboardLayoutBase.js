import styled from "styled-components";
import Link from "next/link";

import InnerLayoutWrapper from "components/InnerLayoutWrapper";
import UppercaseTextButton from "components/buttons/UppercaseTextButton";

/*
Props
variant - "admin" (default), "member"
headingText - String
withBackButton - Boolean
 */
const DashboardLayoutBase = (props) => {
  const {
    variant = "admin",
    headingText = "Admin Dashboard",
    withBackButton = false,
    children,
  } = props;

  return (
    <S.DashboardLayoutBase {...props}>
      <InnerLayoutWrapper>
        {withBackButton === true && (
          <Link href="/">
            <a>
              <UppercaseTextButton
                className="DashboardLayoutBase__back-UppercaseTextButton"
                variant="muted"
              >
                Back to Dashboard
              </UppercaseTextButton>
            </a>
          </Link>
        )}

        <h1 className="DashboardLayoutBase__heading-text">{headingText}</h1>

        <div className="DashboardLayoutBase__divider-graphic"></div>

        {children}
      </InnerLayoutWrapper>
    </S.DashboardLayoutBase>
  );
};

const S = {};

S.DashboardLayoutBase = styled.div`
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size[16]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-top: ${(p) => p.theme.size[8]};
  }

  .DashboardLayoutBase__back-UppercaseTextButton {
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .DashboardLayoutBase__heading-text {
    font-size: 2em;
    font-weight: 700;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayoutBase__heading-text {
      font-size: 1.5em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .DashboardLayoutBase__divider-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayoutBase__divider-graphic {
      height: 1px;
      background-color: ${(p) => p.theme.color.grey};
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
`;

export default DashboardLayoutBase;

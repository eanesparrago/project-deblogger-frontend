import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import InnerLayoutWrapper from "components/InnerLayoutWrapper";
import UserProfile from "components/compounds/UserProfile";
import PostsBlock from "components/compounds/PostsBlock";

/*
Props
variant - "admin" (default), "member"
headingText - String
withBackButton - Boolean
 */
const DashboardLayout = (props) => {
  const {
    variant = "admin",
    headingText = "Admin Dashboard",
    withBackButton = false,
  } = props;

  return (
    <S.DashboardLayout {...props}>
      <S.DashboardLayout>
        <InnerLayoutWrapper>
          <h1 className="DashboardLayout__heading-text">{headingText}</h1>

          <div className="DashboardLayout__divider-graphic"></div>

          <UserProfile className="DashboardLayout__UserProfile"></UserProfile>

          <div className="DashboardLayout__control-group">
            <button className="DarkButton">Edit Profile</button>

            {variant === "admin" && (
              <button className="DarkButton">Manage All Deblogger Posts</button>
            )}
          </div>

          <PostsBlock
            as="section"
            headingText="My Posts"
            variant="withControls"
          ></PostsBlock>
        </InnerLayoutWrapper>
      </S.DashboardLayout>
    </S.DashboardLayout>
  );
};

const S = {};

S.DashboardLayout = styled.div`
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size[16]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-top: ${(p) => p.theme.size[8]};
  }

  .DashboardLayout__heading-text {
    font-size: 2em;
    font-weight: 700;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__heading-text {
      font-size: 1.5em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .DashboardLayout__divider-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__divider-graphic {
      height: 1px;
      background-color: ${(p) => p.theme.color.grey};
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .DashboardLayout__UserProfile {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__UserProfile {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .DashboardLayout__control-group {
    margin-bottom: ${(p) => p.theme.size[64]};

    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size[16]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__control-group {
      margin-bottom: ${(p) => p.theme.size[48]};
      display: flex;
      flex-flow: row wrap;

      > *:not(:last-child) {
        margin-right: ${(p) => p.theme.size[16]};
        margin-bottom: ${(p) => p.theme.size[16]};
      }
    }
  }

  .DarkButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
    height: ${(p) => p.theme.size[48]};
    background-color: ${(p) => p.theme.color.dark};
    border-radius: 8px;
    box-shadow: ${(p) => p.theme.shadow.small};
    font-size: 1.1875em;
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1em;
    }
  }
`;

export default DashboardLayout;

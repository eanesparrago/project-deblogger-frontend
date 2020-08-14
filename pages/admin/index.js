import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import InnerLayout from "components/InnerLayout";
import UserProfile from "components/compounds/UserProfile";
import PostsBlock from "components/compounds/PostsBlock";

const AdminPage = () => {
  return (
    <CommonLayout variant="admin">
      <S.AdminPage>
        <InnerLayout>
          <h1 className="AdminPage__heading-text">Admin Dashboard</h1>

          <div className="AdminPage__divider-graphic"></div>

          <UserProfile className="AdminPage__UserProfile"></UserProfile>

          <div className="AdminPage__control-group">
            <button className="DarkButton">Edit Profile</button>
            <button className="DarkButton">Manage All Deblogger Posts</button>
          </div>

          <PostsBlock
            as="section"
            headingText="My Posts"
            variant="withControls"
          ></PostsBlock>
        </InnerLayout>
      </S.AdminPage>
    </CommonLayout>
  );
};

const S = {};

S.AdminPage = styled.main`
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size[16]};
  }

  .AdminPage__heading-text {
    font-size: 2em;
    font-weight: 700;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .AdminPage__heading-text {
      font-size: 1.5em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .AdminPage__divider-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .AdminPage__divider-graphic {
      height: 1px;
      background-color: ${(p) => p.theme.color.grey};
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .AdminPage__UserProfile {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .AdminPage__UserProfile {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .AdminPage__control-group {
    margin-bottom: ${(p) => p.theme.size[64]};

    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size[16]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .AdminPage__control-group {
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
    font-weight: 300;
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1em;
      font-weight: 400;
    }
  }
`;

export default AdminPage;

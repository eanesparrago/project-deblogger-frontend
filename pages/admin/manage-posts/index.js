import React from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import SearchBox from "components/SearchBox";
import PostsBlock from "components/compounds/PostsBlock";

const ManagePostsPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.ManagePostsPage as="main">
        <DashboardLayoutBase
          headingText="Manage All Deblogger Posts"
          withBackButton={true}
        >
          <SearchBox className="ManagePostsPage__SearchBox"></SearchBox>

          <PostsBlock
            variant="withControls"
            headingText="All Deblogger Posts"
          ></PostsBlock>
        </DashboardLayoutBase>
      </S.ManagePostsPage>
    </CommonLayout>
  );
};

const S = {};

S.ManagePostsPage = styled.div`
  .ManagePostsPage__SearchBox {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ManagePostsPage__SearchBox {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
`;

export default ManagePostsPage;

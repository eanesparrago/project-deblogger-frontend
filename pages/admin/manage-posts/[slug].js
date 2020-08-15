import React from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import SearchBox from "components/SearchBox";
import PostsBlock from "components/compounds/PostsBlock";

const EditPostPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.EditPostPage as="main">
        <DashboardLayoutBase
          headingText="Edit Post"
          withBackButton={true}
        ></DashboardLayoutBase>
      </S.EditPostPage>
    </CommonLayout>
  );
};

const S = {};

S.EditPostPage = styled.div``;

export default EditPostPage;

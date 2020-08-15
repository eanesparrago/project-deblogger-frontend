import React from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";

const ManagePosts = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.ManagePosts as="main">
        <DashboardLayoutBase
          variant="admin"
          headingText="Manage All Deblogger Posts"
          withBackButton={true}
        ></DashboardLayoutBase>
      </S.ManagePosts>
    </CommonLayout>
  );
};

const S = {};

S.ManagePosts = styled.div``;

export default ManagePosts;

import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import DashboardLayout from "components/DashboardLayout";

const UserPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.UserPage as="main">
        <DashboardLayout
          variant="member"
          headingText="Your Dashboard"
          withBackButton={false}
        ></DashboardLayout>
      </S.UserPage>
    </CommonLayout>
  );
};

const S = {};

S.UserPage = styled.div``;

export default UserPage;

import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import DashboardLayoutHome from "components/DashboardLayoutHome";

const UserPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.UserPage as="main">
        <DashboardLayoutHome
          variant="member"
          headingText="Your Dashboard"
          withBackButton={false}
        ></DashboardLayoutHome>
      </S.UserPage>
    </CommonLayout>
  );
};

const S = {};

S.UserPage = styled.div``;

export default UserPage;

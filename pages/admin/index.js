import React from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutHome from "components/layouts/DashboardLayoutHome";

const AdminPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.AdminPage as="main">
        <DashboardLayoutHome
          variant="admin"
          headingText="Admin Dashboard"
          withBackButton={false}
        ></DashboardLayoutHome>
      </S.AdminPage>
    </CommonLayout>
  );
};

const S = {};

S.AdminPage = styled.div``;

export default AdminPage;

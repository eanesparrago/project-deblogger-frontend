import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import DashboardLayoutHome from "components/DashboardLayoutHome";

const AdminPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.AdminPage as="main">
        <DashboardLayoutHome variant="admin"></DashboardLayoutHome>
      </S.AdminPage>
    </CommonLayout>
  );
};

const S = {};

S.AdminPage = styled.div``;

export default AdminPage;

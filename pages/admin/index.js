import React from "react";
import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import DashboardLayout from "components/DashboardLayout";

const AdminPage = () => {
  return (
    <CommonLayout variant="admin">
      <S.AdminPage as="main">
        <DashboardLayout
          variant="admin"
          headingText="Admin Dashboard"
          withBackButton={false}
        ></DashboardLayout>
      </S.AdminPage>
    </CommonLayout>
  );
};

const S = {};

S.AdminPage = styled.div``;

export default AdminPage;

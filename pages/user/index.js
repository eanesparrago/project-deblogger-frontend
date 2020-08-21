import { useState, useEffect } from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutHome from "components/layouts/DashboardLayoutHome";

import { getAuth } from "actions/auth";
import { getBlogs } from "actions/blog";

const UserPage = () => {
  const auth = getAuth();

  const [data, setData] = useState([]);

  useEffect(() => {
    getBlogs(auth.username).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

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

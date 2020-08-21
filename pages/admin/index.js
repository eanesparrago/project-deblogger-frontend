import { useState, useEffect } from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutHome from "components/layouts/DashboardLayoutHome";

import { getAuth } from "actions/auth";
import { getBlogs } from "actions/blog";

const AdminPage = () => {
  const auth = getAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogs(auth.username).then((data) => {
      setPosts(data);
      console.log(data);
    });
  }, []);

  return (
    <CommonLayout variant="dashboard">
      <S.AdminPage as="main">
        <DashboardLayoutHome
          variant="admin"
          headingText="Admin Dashboard"
          withBackButton={false}
          postsData={posts}
        ></DashboardLayoutHome>
      </S.AdminPage>
    </CommonLayout>
  );
};

const S = {};

S.AdminPage = styled.div``;

export default AdminPage;

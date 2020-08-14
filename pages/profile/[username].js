import styled from "styled-components";
import Link from "next/link";

import CommonLayout from "components/CommonLayout";
import InnerLayout from "components/InnerLayout";
import UppercaseTextButton from "components/UppercaseTextButton";
import UserAvatar from "components/UserAvatar";

const S = {};

S.Profile = styled.div``;

const Profile = () => {
  return (
    <CommonLayout>
      <S.Profile as="main">
        <InnerLayout>
          <UppercaseTextButton>Back</UppercaseTextButton>
        </InnerLayout>
      </S.Profile>
    </CommonLayout>
  );
};

export default Profile;

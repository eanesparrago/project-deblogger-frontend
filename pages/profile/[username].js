import styled from "styled-components";
import Link from "next/link";

import CommonLayout from "components/layouts/CommonLayout";
import InnerLayoutWrapper from "components/InnerLayoutWrapper";
import UppercaseTextButton from "components/buttons/UppercaseTextButton";
import UserProfile from "components/compounds/UserProfile";
import PostsBlock from "components/compounds/PostsBlock";

const ProfilePage = () => {
  return (
    <CommonLayout>
      <S.ProfilePage as="main">
        <InnerLayoutWrapper>
          <Link href="/">
            <a>
              <UppercaseTextButton className="ProfilePage__back-UppercaseTextButton">
                Back
              </UppercaseTextButton>
            </a>
          </Link>

          <div className="ProfilePage__divider-graphic"></div>

          <UserProfile
            as="article"
            className="ProfilePage__UserProfile"
          ></UserProfile>

          <PostsBlock
            as="section"
            className="ProfilePage__PostsBlock"
          ></PostsBlock>
        </InnerLayoutWrapper>
      </S.ProfilePage>
    </CommonLayout>
  );
};

const S = {};

S.ProfilePage = styled.div`
  .ProfilePage__back-UppercaseTextButton {
    margin-bottom: ${(p) => p.theme.size[8]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__back-UppercaseTextButton {
      margin-bottom: 0;
    }
  }

  .ProfilePage__divider-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__divider-graphic {
      display: none;
    }
  }

  .ProfilePage__UserProfile {
    margin-bottom: ${(p) => p.theme.size[64]};
  }

  .ProfilePage__PostsBlock {
  }
`;

export default ProfilePage;

import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import NormalTextButton from "components/buttons/NormalTextButton";
import UserAvatar from "components/UserAvatar";

import { getAuth } from "actions/auth";

const UserControls = ({ ...rest }) => {
  const router = useRouter();
  const auth = getAuth();

  let nameText;
  let usernameText;
  let dashboardLinkText;

  if (auth) {
    nameText = auth.name ? auth.name : "No One";

    usernameText = `@${auth.username}`;

    dashboardLinkText = auth.role === 1 ? "Admin Dashboard" : "My Dashboard";
  }

  const goToDashboard = () => {
    const link = auth.role === 1 ? "/admin" : "/user";

    router.push(link);
  };

  return (
    <S.UserControls as="section" className="Home__UserControls" {...rest}>
      <Link href="/write">
        <a className="UserControls__write-button">Write a Post</a>
      </Link>

      {auth ? (
        <div className="UserControls__authenticatedState-block">
          <div className="UserControls__user-block">
            <div className="UserControls__userInfo-block">
              <div className="UserControls__userInfoName-text">{nameText}</div>

              <div className="UserControls__userInfoUsername-text">
                {usernameText}
              </div>
            </div>

            <UserAvatar size="medium"></UserAvatar>
          </div>

          <NormalTextButton as="button" onClick={goToDashboard}>
            {dashboardLinkText}
          </NormalTextButton>
        </div>
      ) : (
        <Link href="/sign-in">
          <a>
            <NormalTextButton href="/">Sign In/Up</NormalTextButton>
          </a>
        </Link>
      )}
    </S.UserControls>
  );
};

const S = {};

S.UserControls = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  .UserControls__write-button {
    display: flex;
    align-items: center;
    padding: 0 ${(p) => p.theme.size[24]};
    height: ${(p) => p.theme.size[48]};
    color: ${(p) => p.theme.color.primary.main};
    font-weight: bold;
    font-size: 1.1875em;
    line-height: 100%;
    background-color: ${(p) => p.theme.color.dark};
    box-shadow: ${(p) => p.theme.shadow.small};
    border-radius: 8px;
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .UserControls__signInUp-button {
    display: flex;
    align-items: center;
    height: ${(p) => p.theme.size[48]};
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
  }

  .UserControls__user-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .UserControls__userInfo-block {
    text-align: right;
    margin-right: ${(p) => p.theme.size[12]};
  }

  .UserControls__userInfoName-text {
    font-size: 1.1875em;
    margin-bottom: ${(p) => p.theme.size[8]};
  }

  .UserControls__userInfoUsername-text {
    color: ${(p) => p.theme.color.lightMuted};
  }

  .UserControls__authenticatedState-block {
    text-align: right;
  }
`;

export default UserControls;

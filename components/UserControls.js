import styled from "styled-components";
import Link from "next/link";

import NormalTextButton from "./NormalTextButton";
import UserAvatar from "./UserAvatar";

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
    display: none;
  }
`;

const UserControls = ({ ...rest }) => {
  return (
    <S.UserControls as="section" className="Home__UserControls" {...rest}>
      <a href="/" className="UserControls__write-button">
        Write a Post
      </a>

      <Link href="/sign-in" passHref={true}>
        <a>
          <NormalTextButton href="/">Sign In/Up</NormalTextButton>
        </a>
      </Link>

      <div className="UserControls__authenticatedState-block">
        <div className="UserControls__user-block">
          <div className="UserControls__userInfo-block">
            <div className="UserControls__userInfoName-text">
              Paul McKittens
            </div>

            <div className="UserControls__userInfoUsername-text">@paulmck</div>
          </div>

          <UserAvatar size="medium"></UserAvatar>
        </div>

        <NormalTextButton as="a" href="/">
          Admin Dashboard
        </NormalTextButton>
      </div>
    </S.UserControls>
  );
};

export default UserControls;

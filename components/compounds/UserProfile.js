import styled from "styled-components";

const UserProfile = (props) => {
  const { data: { name, username, bio } = {} } = props;

  const profilePictureUrl = `https://robohash.org/${username}`;
  const profilePictureAltText = `Profile picture of ${username}`;
  const nameText = name ? name : "No One";
  const usernameText = `@${username}`;
  const bioText = bio ? bio : "Bio not found";

  return (
    <S.UserProfile {...props}>
      <div className="UserProfile__userPhoto-wrapper">
        <img
          src={profilePictureUrl}
          alt={profilePictureAltText}
          className="UserProfile__userPhoto-image"
        />
      </div>

      <div className="UserProfile__userText-block">
        <h1 className="UserProfile__userName-text">{nameText}</h1>

        <div className="UserProfile__userUsername-text">{usernameText}</div>

        <p className="UserProfile__userBio-text">{bioText}</p>
      </div>
    </S.UserProfile>
  );
};

const S = {};

S.UserProfile = styled.div`
  display: flex;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    margin-bottom: ${(p) => p.theme.size[48]};
    flex-flow: column;
    align-items: center;
  }

  .UserProfile__userPhoto-wrapper {
    width: ${(p) => p.theme.size.free(192)};
    height: ${(p) => p.theme.size.free(192)};
    border-radius: 100%;
    overflow: hidden;
    margin-right: ${(p) => p.theme.size[32]};
    flex-shrink: 0;
    background-color: ${(p) => p.theme.color.black};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .UserProfile__userPhoto-wrapper {
      width: ${(p) => p.theme.size.free(128)};
      height: ${(p) => p.theme.size.free(128)};
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .UserProfile__userPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .UserProfile__userText-block {
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .UserProfile__userText-block {
      text-align: center;
    }
  }

  .UserProfile__userName-text {
    font-size: 3em;
    margin-bottom: ${(p) => p.theme.size[12]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .UserProfile__userName-text {
      font-size: 2em;
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .UserProfile__userUsername-text {
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .UserProfile__userUsername-text {
      font-size: 1em;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .UserProfile__userBio-text {
    line-height: 150%;
    color: ${(p) => p.theme.color.lightMuted};
  }
`;

export default UserProfile;

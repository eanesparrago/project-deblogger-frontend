import styled from "styled-components";
import Link from "next/link";

import CommonLayout from "components/CommonLayout";
import InnerLayout from "components/InnerLayout";
import UppercaseTextButton from "components/UppercaseTextButton";
import UserAvatar from "components/UserAvatar";

const ProfilePage = () => {
  return (
    <CommonLayout>
      <S.ProfilePage as="main">
        <InnerLayout>
          <Link href="/">
            <a>
              <UppercaseTextButton className="ProfilePage__back-UppercaseTextButton">
                Back
              </UppercaseTextButton>
            </a>
          </Link>

          <div className="ProfilePage__divider-graphic"></div>

          <article className="ProfilePage__user-block">
            <div className="ProfilePage__userPhoto-wrapper">
              <img
                src="/static/images/cat_01.jpg"
                alt=""
                className="ProfilePage__userPhoto-image"
              />
            </div>

            <div className="ProfilePage__userText-block">
              <h1 className="ProfilePage__userName-text">Kat Meows</h1>

              <div className="ProfilePage__userUsername-text">@katmeows44</div>

              <p className="ProfilePage__userBio-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                facere quas, repellendus commodi voluptatum facilis fugit, eos
                doloribus cupiditate ut voluptatem nostrum porro unde odio a
                error ipsam harum quisquam.
              </p>
            </div>
          </article>

          <section className="ProfilePage__posts-block">
            <h2 className="ProfilePage__postsHeading-text">Posts</h2>

            <ol className="ProfilePage__posts-group">
              <li className="ProfilePage__post-item">
                <span className="ProfilePage__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="ProfilePage__postDate-text">2020-08-12</span>
              </li>

              <li className="ProfilePage__post-item">
                <span className="ProfilePage__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="ProfilePage__postDate-text">2020-08-12</span>
              </li>

              <li className="ProfilePage__post-item">
                <span className="ProfilePage__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="ProfilePage__postDate-text">2020-08-12</span>
              </li>
            </ol>
          </section>
        </InnerLayout>
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

  .ProfilePage__user-block {
    display: flex;
    margin-bottom: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__user-block {
      margin-bottom: ${(p) => p.theme.size[48]};
      flex-flow: column;
      align-items: center;
    }
  }

  .ProfilePage__userPhoto-wrapper {
    width: ${(p) => p.theme.size.free(192)};
    height: ${(p) => p.theme.size.free(192)};
    border-radius: 100%;
    overflow: hidden;
    margin-right: ${(p) => p.theme.size[32]};
    flex-shrink: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__userPhoto-wrapper {
      width: ${(p) => p.theme.size.free(128)};
      height: ${(p) => p.theme.size.free(128)};
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .ProfilePage__userPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ProfilePage__userText-block {
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__userText-block {
      text-align: center;
    }
  }

  .ProfilePage__userName-text {
    font-size: 3em;
    margin-bottom: ${(p) => p.theme.size[12]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__userName-text {
      font-size: 2em;
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .ProfilePage__userUsername-text {
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__userUsername-text {
      font-size: 1em;
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .ProfilePage__userBio-text {
    line-height: 150%;
    color: ${(p) => p.theme.color.lightMuted};
  }

  .ProfilePage__posts-block {
  }

  .ProfilePage__postsHeading-text {
    font-size: 1.5em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__postsHeading-text {
      font-size: 1.3125em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .ProfilePage__posts-group {
    .ProfilePage__post-item:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[12]};
    }
  }

  .ProfilePage__post-item {
    height: ${(p) => p.theme.size[64]};
    background-color: ${(p) => p.theme.color.dark};
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .ProfilePage__post-item {
      height: unset;
      flex-flow: column;
      align-items: flex-start;
      padding-top: ${(p) => p.theme.size[16]};
      padding-bottom: ${(p) => p.theme.size[24]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .ProfilePage__post-item {
      padding-left: ${(p) => p.theme.size[16]};
      padding-right: ${(p) => p.theme.size[16]};
    }
  }

  .ProfilePage__postTitle-text {
    font-size: 1.1875em;
    margin-right: ${(p) => p.theme.size[16]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .ProfilePage__postTitle-text {
      margin-bottom: ${(p) => p.theme.size[8]};
      line-height: 150%;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .ProfilePage__postTitle-text {
      font-size: 1em;
    }
  }

  .ProfilePage__postDate-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
  }
`;

export default ProfilePage;

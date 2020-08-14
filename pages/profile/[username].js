import styled from "styled-components";
import Link from "next/link";

import CommonLayout from "components/CommonLayout";
import InnerLayout from "components/InnerLayout";
import UppercaseTextButton from "components/UppercaseTextButton";
import UserAvatar from "components/UserAvatar";

const Profile = () => {
  return (
    <CommonLayout>
      <S.Profile as="main">
        <InnerLayout>
          <Link href="/">
            <a>
              <UppercaseTextButton className="Profile__back-UppercaseTextButton">
                Back
              </UppercaseTextButton>
            </a>
          </Link>

          <div className="Profile__divider-graphic"></div>

          <article className="Profile__user-block">
            <div className="Profile__userPhoto-wrapper">
              <img
                src="/static/images/cat_01.jpg"
                alt=""
                className="Profile__userPhoto-image"
              />
            </div>

            <div className="Profile__userText-block">
              <h1 className="Profile__userName-text">Kat Meows</h1>

              <div className="Profile__userUsername-text">@katmeows44</div>

              <p className="Profile__userBio-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                facere quas, repellendus commodi voluptatum facilis fugit, eos
                doloribus cupiditate ut voluptatem nostrum porro unde odio a
                error ipsam harum quisquam.
              </p>
            </div>
          </article>

          <section className="Profile__posts-block">
            <h2 className="Profile__postsHeading-text">Posts</h2>

            <ol className="Profile__posts-group">
              <li className="Profile__post-item">
                <span className="Profile__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="Profile__postDate-text">2020-08-12</span>
              </li>

              <li className="Profile__post-item">
                <span className="Profile__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="Profile__postDate-text">2020-08-12</span>
              </li>

              <li className="Profile__post-item">
                <span className="Profile__postTitle-text">
                  The Quick Brown Fox Jumps Over The Lazy Dog
                </span>

                <span className="Profile__postDate-text">2020-08-12</span>
              </li>
            </ol>
          </section>
        </InnerLayout>
      </S.Profile>
    </CommonLayout>
  );
};

const S = {};

S.Profile = styled.div`
  .Profile__back-UppercaseTextButton {
    margin-bottom: ${(p) => p.theme.size[8]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__back-UppercaseTextButton {
      margin-bottom: 0;
    }
  }

  .Profile__divider-graphic {
    height: 1px;
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__divider-graphic {
      display: none;
    }
  }

  .Profile__user-block {
    display: flex;
    margin-bottom: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__user-block {
      margin-bottom: ${(p) => p.theme.size[48]};
      flex-flow: column;
      align-items: center;
    }
  }

  .Profile__userPhoto-wrapper {
    width: ${(p) => p.theme.size.free(192)};
    height: ${(p) => p.theme.size.free(192)};
    border-radius: 100%;
    overflow: hidden;
    margin-right: ${(p) => p.theme.size[32]};
    flex-shrink: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__userPhoto-wrapper {
      width: ${(p) => p.theme.size.free(128)};
      height: ${(p) => p.theme.size.free(128)};
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .Profile__userPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .Profile__userText-block {
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__userText-block {
      text-align: center;
    }
  }

  .Profile__userName-text {
    font-size: 3em;
    margin-bottom: ${(p) => p.theme.size[12]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__userName-text {
      font-size: 2em;
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .Profile__userUsername-text {
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__userUsername-text {
      font-size: 1em;
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .Profile__userBio-text {
    line-height: 150%;
    color: ${(p) => p.theme.color.lightMuted};
  }

  .Profile__posts-block {
  }

  .Profile__postsHeading-text {
    font-size: 1.5em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__postsHeading-text {
      font-size: 1.3125em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .Profile__posts-group {
    .Profile__post-item:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[12]};
    }
  }

  .Profile__post-item {
    height: ${(p) => p.theme.size[64]};
    background-color: ${(p) => p.theme.color.dark};
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .Profile__post-item {
      height: unset;
      flex-flow: column;
      align-items: flex-start;
      padding-top: ${(p) => p.theme.size[16]};
      padding-bottom: ${(p) => p.theme.size[24]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .Profile__post-item {
      padding-left: ${(p) => p.theme.size[16]};
      padding-right: ${(p) => p.theme.size[16]};
    }
  }

  .Profile__postTitle-text {
    font-size: 1.1875em;
    margin-right: ${(p) => p.theme.size[16]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .Profile__postTitle-text {
      margin-bottom: ${(p) => p.theme.size[8]};
      line-height: 150%;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Profile__postTitle-text {
      font-size: 1em;
    }
  }

  .Profile__postDate-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
  }
`;

export default Profile;

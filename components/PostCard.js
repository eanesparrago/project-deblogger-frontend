import styled from "styled-components";
import Link from "next/link";

import UserAvatar from "./UserAvatar";

const S = {};

S.PostCard = styled.div`
  width: ${(p) => p.theme.size.free(512)};
  padding-top: ${(p) => p.theme.size.free(88)};
  position: relative;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    width: unset;
  }

  .PostCard__photo-wrapper {
    width: ${(p) => p.theme.size.free(128)};
    height: ${(p) => p.theme.size.free(128)};
    border-radius: 100%;
    overflow: hidden;
    box-shadow: ${(p) => p.theme.shadow.small};
    position: absolute;
    top: 0;
    left: ${(p) => p.theme.size[32]};
    -webkit-mask-image: linear-gradient(to bottom, transparent 25%, black 75%);
    mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__photo-wrapper {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .PostCard__photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .PostCard__wrapper {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: ${(p) => p.theme.shadow.big};
  }

  .PostCard__header-block {
    padding: ${(p) => p.theme.size[32]};
    padding-top: ${(p) => p.theme.size[24]};
    position: relative;
    border-bottom: 1px solid ${(p) => p.theme.color.blue};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__header-block {
      padding: ${(p) => p.theme.size[24]};
      padding-bottom: ${(p) => p.theme.size[32]};
      position: relative;
    }
  }

  .PostCard__headerOverlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${(p) => p.theme.color.dark};
    opacity: 0.9;
  }

  .PostCard__headerBackgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }

  .PostCard__heading-text {
    font-size: 2em;
    font-family: ${(p) => p.theme.font.serif};
    line-height: 150%;
    color: ${(p) => p.theme.color.white};
    position: relative;
    z-index: 1;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__heading-text {
      font-size: 1.5em;
      text-align: center;
    }
  }

  .PostCard__category-wrapper {
    display: inline-flex;
    align-items: center;
    background-color: ${(p) => p.theme.color.blue};
    padding: 0 ${(p) => p.theme.size[16]};
    border-radius: 2px;
    box-shadow: ${(p) => p.theme.shadow.small};
    position: absolute;
    height: ${(p) => p.theme.size[32]};
    left: ${(p) => p.theme.size[32]};
    bottom: -${(p) => p.theme.size[16]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__category-wrapper {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -${(p) => p.theme.size[16]};
    }
  }

  .PostCard__category-text {
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .PostCard__body-wrapper {
    background-color: ${(p) => p.theme.color.dark};
    padding-top: ${(p) => p.theme.size[32]};
    padding-left: ${(p) => p.theme.size[32]};
    padding-right: ${(p) => p.theme.size[32]};
    padding-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__body-wrapper {
      background-color: ${(p) => p.theme.color.dark};
      padding: ${(p) => p.theme.size[24]};
      padding-top: ${(p) => p.theme.size[32]};
    }
  }

  .PostCard__author-block {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .PostCard__UserAvatar {
    margin-right: ${(p) => p.theme.size[12]};
  }

  .PostCard__authorPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .PostCard__authorName-text {
    font-weight: bold;
    font-size: 1.1875em;
    margin-bottom: ${(p) => p.theme.size[8]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__authorName-text {
      font-weight: bold;
      font-size: 1em;
    }
  }

  .PostCard__date-text {
    color: ${(p) => p.theme.color.lightMuted};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__date-text {
      font-size: 0.875em;
    }
  }

  .PostCard__excerpt-text {
    font-weight: 300;
    font-size: 1.1875em;
    line-height: 150%;
    margin-bottom: ${(p) => p.theme.size[8]};
    color: ${(p) => p.theme.color.lightMuted};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__excerpt-text {
      font-size: 1em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .PostCard__footer-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .PostCard__tags-text {
    font-style: italic;
    color: ${(p) => p.theme.color.lightMuted};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__tags-text {
      font-size: 0.875em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .PostCard__read-button {
    height: ${(p) => p.theme.size[48]};
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.1875em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${(p) => p.theme.color.blue};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostCard__read-button {
      display: none;
    }
  }
`;

const PostCard = () => {
  return (
    <S.PostCard as="article">
      <div className="PostCard__photo-wrapper">
        <img
          className="PostCard__photo-image"
          src="/static/images/cat_01.jpg"
          alt=""
        />
      </div>

      <div className="PostCard__wrapper">
        <header className="PostCard__header-block">
          <h1 className="PostCard__heading-text">
            The quick brown fox jumps over the lazy dog 🦊
          </h1>

          <img
            className="PostCard__headerBackgroundImage"
            src="/static/images/cat_01.jpg"
          ></img>

          <div className="PostCard__headerOverlay"></div>

          <div className="PostCard__category-wrapper">
            <span className="PostCard__category-text">Development</span>
          </div>
        </header>

        <div className="PostCard__body-wrapper">
          <div className="PostCard__author-block">
            <Link href="/profile/[username]" as="/profile/test">
              <a className="PostCard__UserAvatar">
                <UserAvatar></UserAvatar>
              </a>
            </Link>

            <div className="PostCard__authorDetail-block">
              <div className="PostCard__authorName-text">Kat Meows</div>

              <div className="PostCard__date-text">August 10, 2020 Monday</div>
            </div>
          </div>

          <p className="PostCard__excerpt-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            reprehenderit vel est neque soluta assumenda nihil, expedita
            consequatur explicabo quas hic. Cumque odit, minima ea tempore sint
            doloribus! Accusantium, commodi.
          </p>

          <footer className="PostCard__footer-block">
            <span className="PostCard__tags-text">
              React, Next.js, UI Design
            </span>

            <Link href="/post/[slug]" as="/post/test">
              <a className="PostCard__read-button">READ</a>
            </Link>
          </footer>
        </div>
      </div>
    </S.PostCard>
  );
};

export default PostCard;

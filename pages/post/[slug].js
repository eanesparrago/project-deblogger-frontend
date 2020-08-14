import styled from "styled-components";
import Link from "next/link";

import CommonLayout from "components/CommonLayout";
import InnerLayout from "components/InnerLayout";
import UppercaseTextButton from "components/UppercaseTextButton";
import UserAvatar from "components/UserAvatar";

const PostPage = () => {
  return (
    <CommonLayout>
      <S.PostPage as="article">
        <InnerLayout>
          <div className="PostPage__header-block">
            <Link href="/">
              <a className="PostPage__back-button">
                <UppercaseTextButton>Back</UppercaseTextButton>
              </a>
            </Link>

            <div className="PostPage__category">Development</div>

            <h1 className="PostPage__title-text">
              8 Tailwind CSS resources to help your next project takeoff
            </h1>

            <div className="PostPage__author-block">
              <UserAvatar
                className="PostPage__authorPhoto-UserAvatar"
                size="medium"
                responsive
              ></UserAvatar>

              <div className="PostPage__authorText-block">
                <div className="PostPage__authorName-text">
                  <span className="util-hideOnPhone">Written by </span>
                  <strong>Kat Meows</strong>
                </div>

                <div className="PostPage__authorDate-text">
                  <span className="util-hideOnPhone">Published on </span>
                  August 10, 2020 (Monday)
                </div>
              </div>
            </div>

            <div className="PostPage__tags-text">
              Tags: React, Next.js, UI Design
            </div>

            <div className="PostPage__divider-graphic"></div>

            <div className="PostPage__photo-wrapper">
              <img
                src="/static/images/post_photo_01.jpg"
                alt=""
                className="PostPage__photo-image"
              />
            </div>
          </div>

          <div className="PostPage__content-block">
            <p className="PostPage__contentParagraph-text">
              If it fits i sits stand with legs in litter box, but poop outside
              for curl up and sleep on the freshly laundered towels sleep on my
              human's head, sleep on my human's head purrrrrr instead of
              drinking water from the cat bowl, make sure to steal water from
              the toilet.
            </p>

            <p className="PostPage__contentParagraph-text">
              If it fits i sits stand with legs in litter box, but poop outside
              for curl up and sleep on the freshly laundered towels sleep on my
              human's head, sleep on my human's head purrrrrr instead of
              drinking water from the cat bowl, make sure to steal water from
              the toilet.
            </p>
          </div>
        </InnerLayout>
      </S.PostPage>
    </CommonLayout>
  );
};

const S = {};

S.PostPage = styled.div`
  overflow: hidden;

  .PostPage__header-block {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__header-block {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .PostPage__back-button {
    margin-bottom: ${(p) => p.theme.size[16]};
    display: block;
    position: relative;
    left: 2px;
  }

  .PostPage__category {
    position: absolute;
    top: ${(p) => p.theme.size[8]};
    right: ${(p) => p.theme.size.free(256)};
    z-index: -2;
    display: inline-flex;
    align-items: center;
    background-color: ${(p) => p.theme.color.blue};
    padding: 0 ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size.free(160)};
    border-radius: 2px;
    box-shadow: ${(p) => p.theme.shadow.small};
    position: absolute;
    height: ${(p) => p.theme.size[32]};
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__category {
      position: static;
      padding-right: ${(p) => p.theme.size[16]};
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .PostPage__title-text {
    width: 62%;
    font-size: 3.875em;
    font-family: ${(p) => p.theme.font.serif};
    font-weight: 200;
    line-height: 120%;
    text-shadow: ${(p) => p.theme.shadow.small};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .PostPage__title-text {
      width: 100%;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__title-text {
      font-size: 2em;
      line-height: 150%;
      font-weight: 300;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .PostPage__author-block {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__author-block {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .PostPage__authorText-block {
  }

  .PostPage__authorPhoto-UserAvatar {
    margin-right: ${(p) => p.theme.size[16]};
  }

  .PostPage__authorName-text {
    font-size: 1.1875em;
    margin-bottom: ${(p) => p.theme.size[12]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__authorName-text {
      font-size: 1em;
    }
  }

  .PostPage__authorDate-text {
    color: ${(p) => p.theme.color.lightMuted};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__authorDate-text {
      font-size: 0.875em;
    }
  }

  .PostPage__tags-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
    margin-bottom: ${(p) => p.theme.size[16]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__tags-text {
      font-size: 0.875em;
    }
  }

  .PostPage__divider-graphic {
    width: 62%;
    height: 1px;
    background-color: ${(p) => p.theme.color.blue};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__divider-graphic {
      width: 100%;
    }
  }

  .PostPage__photo-wrapper {
    width: ${(p) => p.theme.size.free(512)};
    height: ${(p) => p.theme.size.free(512)};
    border-radius: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    -webkit-mask-image: linear-gradient(to bottom, transparent 25%, black 75%);
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 50%,
      transparent 100%
    );
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__photo-wrapper {
      width: ${(p) => p.theme.size.free(384)};
      height: ${(p) => p.theme.size.free(384)};
      top: ${(p) => p.theme.size[32]};
      z-index: -3;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .PostPage__photo-wrapper {
      right: -${(p) => p.theme.size[64]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__photo-wrapper {
      width: ${(p) => p.theme.size.free(336)};
      height: ${(p) => p.theme.size.free(336)};
    }
  }

  .PostPage__photo-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .PostPage__photo-image {
      filter: brightness(60%);
    }
  }

  .PostPage__content-block {
    width: 62%;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__content-block {
      width: 100%;
    }
  }

  .PostPage__contentParagraph-text {
    font-weight: 300;
    font-size: 1.3125em;
    line-height: 180%;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .PostPage__contentParagraph-text {
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostPage__contentParagraph-text {
      font-size: 1.1875em;
    }
  }
`;

export default PostPage;

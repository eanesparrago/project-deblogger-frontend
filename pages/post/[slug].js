import styled from "styled-components";

import CommonLayout from "components/CommonLayout";
import UppercaseTextButton from "components/UppercaseTextButton";
import UserAvatar from "components/UserAvatar";

const S = {};

S.Post = styled.article`
  margin: 0 auto;
  width: ${(p) => p.theme.size.free(1056)};
  padding-top: ${(p) => p.theme.size[64]};
  padding-bottom: ${(p) => p.theme.size[64]};
  overflow: hidden;
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    padding-top: ${(p) => p.theme.size.free(80)};
    width: 62%;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
    width: 100%;
    padding-left: ${(p) => p.theme.size[96]};
    padding-right: ${(p) => p.theme.size[96]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size[16]};
  }

  .Post__header-block {
    position: relative;
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Post__header-block {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .Post__back-button {
    margin-bottom: ${(p) => p.theme.size[16]};
    display: block;
    position: relative;
    left: 1px;
  }

  .Post__category {
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
    .Post__category {
      position: static;
      padding-right: ${(p) => p.theme.size[16]};
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .Post__title-text {
    width: 62%;
    font-size: 3.875em;
    font-family: ${(p) => p.theme.font.serif};
    font-weight: 200;
    line-height: 120%;
    text-shadow: ${(p) => p.theme.shadow.small};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .Post__title-text {
      width: 100%;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__title-text {
      font-size: 2em;
      line-height: 150%;
      font-weight: 300;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .Post__author-block {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Post__author-block {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .Post__authorText-block {
  }

  .Post__authorPhoto-UserAvatar {
    margin-right: ${(p) => p.theme.size[16]};
  }

  .Post__authorName-text {
    font-size: 1.1875em;
    margin-bottom: ${(p) => p.theme.size[12]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__authorName-text {
      font-size: 1em;
    }
  }

  .Post__authorDate-text {
    color: ${(p) => p.theme.color.lightMuted};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__authorDate-text {
      font-size: 0.875em;
    }
  }

  .Post__tags-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
    margin-bottom: ${(p) => p.theme.size[16]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__tags-text {
      font-size: 0.875em;
    }
  }

  .Post__divider-graphic {
    width: 62%;
    height: 1px;
    background-color: ${(p) => p.theme.color.blue};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Post__divider-graphic {
      width: 100%;
    }
  }

  .Post__photo-wrapper {
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
    .Post__photo-wrapper {
      width: ${(p) => p.theme.size.free(384)};
      height: ${(p) => p.theme.size.free(384)};
      top: ${(p) => p.theme.size[32]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .Post__photo-wrapper {
      right: -${(p) => p.theme.size[64]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__photo-wrapper {
      width: ${(p) => p.theme.size.free(336)};
      height: ${(p) => p.theme.size.free(336)};
    }
  }

  .Post__photo-image {
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
    .Post__photo-image {
      filter: brightness(60%);
    }
  }

  .Post__content-block {
    width: 62%;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Post__content-block {
      width: 100%;
    }
  }

  .Post__contentParagraph-text {
    font-weight: 300;
    font-size: 1.3125em;
    line-height: 180%;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    .Post__contentParagraph-text {
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .Post__contentParagraph-text {
      font-size: 1.1875em;
    }
  }
`;

const Post = () => {
  return (
    <CommonLayout>
      <S.Post>
        <div className="Post__header-block">
          <UppercaseTextButton as="button" className="Post__back-button">
            Back
          </UppercaseTextButton>

          <div className="Post__category">Development</div>

          <h1 className="Post__title-text">
            8 Tailwind CSS resources to help your next project takeoff
          </h1>

          <div className="Post__author-block">
            <UserAvatar
              className="Post__authorPhoto-UserAvatar"
              size="medium"
              responsive
            ></UserAvatar>

            <div className="Post__authorText-block">
              <div className="Post__authorName-text">
                <span className="util-hideOnPhone">Written by </span>
                <strong>Kat Meows</strong>
              </div>

              <div className="Post__authorDate-text">
                <span className="util-hideOnPhone">Published on </span>
                August 10, 2020 (Monday)
              </div>
            </div>
          </div>

          <div className="Post__tags-text">Tags: React, Next.js, UI Design</div>

          <div className="Post__divider-graphic"></div>

          <div className="Post__photo-wrapper">
            <img
              src="/static/images/post_photo_01.jpg"
              alt=""
              className="Post__photo-image"
            />
          </div>
        </div>

        <div className="Post__content-block">
          <p className="Post__contentParagraph-text">
            If it fits i sits stand with legs in litter box, but poop outside
            for curl up and sleep on the freshly laundered towels sleep on my
            human's head, sleep on my human's head purrrrrr instead of drinking
            water from the cat bowl, make sure to steal water from the toilet.
          </p>

          <p className="Post__contentParagraph-text">
            If it fits i sits stand with legs in litter box, but poop outside
            for curl up and sleep on the freshly laundered towels sleep on my
            human's head, sleep on my human's head purrrrrr instead of drinking
            water from the cat bowl, make sure to steal water from the toilet.
          </p>
        </div>
      </S.Post>
    </CommonLayout>
  );
};

export default Post;

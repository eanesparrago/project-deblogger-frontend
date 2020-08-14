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

  .Post__header-block {
    position: relative;
    margin-bottom: ${(p) => p.theme.size[48]};
  }

  .Post__back-button {
    margin-bottom: ${(p) => p.theme.size[16]};
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

  .Post__title-text {
    width: 62%;
    font-size: 3.875em;
    font-family: ${(p) => p.theme.font.serif};
    font-weight: 200;
    line-height: 120%;
    text-shadow: ${(p) => p.theme.shadow.small};
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .Post__author-block {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[32]};
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

  .Post__authorDate-text {
    color: ${(p) => p.theme.color.lightMuted};
  }

  .Post__tags-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .Post__divider-graphic {
    width: 62%;
    height: 1px;
    background-color: ${(p) => p.theme.color.blue};
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

  .Post__photo-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(90%);
  }

  .Post__content-block {
  }

  .Post__contentParagraph-text {
    width: 62%;
    font-weight: 300;
    font-size: 1.3125em;
    line-height: 180%;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
`;

const Post = () => {
  return (
    <CommonLayout>
      <S.Post>
        <div className="Post__header-block">
          <UppercaseTextButton className="Post__back-button">
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
            ></UserAvatar>

            <div className="Post__authorText-block">
              <div className="Post__authorName-text">
                Written by <strong>Kat Meows</strong>
              </div>

              <div className="Post__authorDate-text">
                Published on August 10, 2020 (Monday)
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

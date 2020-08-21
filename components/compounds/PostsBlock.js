import styled, { css } from "styled-components";
import Link from "next/link";
import moment from "moment";

import NormalTextButton from "components/buttons/NormalTextButton";
import MutedText from "components/MutedText";

const S = {};

/*
Options
variant = "default", "withControls"
*/
const PostsBlock = (props) => {
  const { variant, headingText = "Posts", postsData = [] } = props;

  return (
    <S.PostsBlock {...props}>
      <h2 className="PostsBlock__postsHeading-text">{headingText}</h2>

      {postsData.length > 0 ? (
        <ol className="PostsBlock__posts-group">
          {postsData.map((postData) => (
            <PostItem
              variant={variant}
              postData={postData}
              key={postData._id}
            ></PostItem>
          ))}
        </ol>
      ) : (
        <MutedText>No posts to show</MutedText>
      )}
    </S.PostsBlock>
  );
};

S.PostsBlock = styled.div`
  .PostsBlock__postsHeading-text {
    font-size: 1.5em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostsBlock__postsHeading-text {
      font-size: 1.3125em;
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .PostsBlock__posts-group {
    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[12]};
    }
  }
`;

/*
Options
variant = "default", "withControls"
*/
const PostItem = (props) => {
  const { variant, postData } = props;

  const withControls = variant === "withControls" ? true : false;

  return (
    <S.PostItem as="li" {...props}>
      <span className="PostItem__title-text">{postData.title}</span>

      <span className="PostItem__date-text">
        {moment(postData.createdAt).format("YYYY-MM-DD")}
      </span>

      {withControls && (
        <div className="PostItem__controls-group">
          <NormalTextButton color="red">Delete</NormalTextButton>

          <Link href="/edit">
            <a>
              <NormalTextButton>Edit</NormalTextButton>
            </a>
          </Link>
        </div>
      )}
    </S.PostItem>
  );
};

S.PostItem = styled.div`
  height: ${(p) => p.theme.size[64]};
  background-color: ${(p) => p.theme.color.dark};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: ${(p) => p.theme.size[24]};
  padding-right: ${(p) => p.theme.size[24]};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    height: unset;
    flex-flow: column;
    align-items: flex-start;
    padding-top: ${(p) => p.theme.size[16]};
    padding-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size[16]};
  }

  ${(p) =>
    p.variant === "withControls" &&
    css`
      @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
        padding-bottom: ${(p) => p.theme.size[8]};
      }
    `}

  .PostItem__title-text {
    font-size: 1.1875em;
    margin-right: ${(p) => p.theme.size[16]};
    font-weight: 300;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .PostItem__title-text {
      margin-bottom: ${(p) => p.theme.size[8]};
      line-height: 150%;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .PostItem__title-text {
      font-size: 1em;
    }
  }

  .PostItem__date-text {
    color: ${(p) => p.theme.color.lightMuted};
    font-style: italic;
  }

  .PostItem__controls-group {
    margin-left: auto;

    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size[32]};
    }
  }
`;

export default PostsBlock;

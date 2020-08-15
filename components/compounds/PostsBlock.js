import styled, { css } from "styled-components";

import NormalTextButton from "components/buttons/NormalTextButton";

const S = {};

/*
Options
variant = "default", "withControls"
*/
const PostsBlock = (props) => {
  const { headingText = "Posts", variant } = props;

  return (
    <S.PostsBlock {...props}>
      <h2 className="PostsBlock__postsHeading-text">{headingText}</h2>

      <ol className="PostsBlock__posts-group">
        <PostItem variant={variant}></PostItem>
        <PostItem variant={variant}></PostItem>
        <PostItem variant={variant}></PostItem>
      </ol>
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
  const { variant } = props;

  const withControls = variant === "withControls" ? true : false;

  return (
    <S.PostItem as="li" {...props}>
      <span className="PostItem__title-text">
        The Quick Brown Fox Jumps Over The Lazy Dog
      </span>

      <span className="PostItem__date-text">2020-08-12</span>

      {withControls && (
        <div className="PostItem__controls-group">
          <NormalTextButton as="button" color="red">
            Delete
          </NormalTextButton>

          <NormalTextButton as="button">Edit</NormalTextButton>
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

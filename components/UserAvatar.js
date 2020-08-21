import React from "react";
import styled, { css } from "styled-components";

const UserAvatar = (props) => {
  const { imgSrc, alt = "" } = props;

  const imgSrcComputed = imgSrc ? imgSrc : "/static/images/cat_01.jpg";

  return (
    <S.UserAvatar {...props}>
      <img className="UserAvatar__userPhoto-image" src={imgSrcComputed} alt={alt} />
    </S.UserAvatar>
  );
};

const S = {};

S.UserAvatar = styled.div`
  width: ${(p) => p.theme.size[48]};
  height: ${(p) => p.theme.size[48]};
  border-radius: 100%;
  overflow: hidden;
  background-color: ${(p) => p.theme.color.black};

  ${(p) =>
    p.size === "medium" &&
    css`
      width: ${(p) => p.theme.size[64]};
      height: ${(p) => p.theme.size[64]};
    `}
  ${(p) =>
    p.responsive &&
    css`
      @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
        width: ${(p) => p.theme.size[48]};
        height: ${(p) => p.theme.size[48]};
      }
    `}
    .UserAvatar__userPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default UserAvatar;

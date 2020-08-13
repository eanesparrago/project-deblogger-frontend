import React from "react";
import styled, { css } from "styled-components";

const S = {};

S.UserAvatar = styled.div`
  width: ${(p) => p.theme.size[48]};
  height: ${(p) => p.theme.size[48]};
  border-radius: 100%;
  overflow: hidden;

  ${(p) =>
    p.size === "medium" &&
    css`
      width: ${(p) => p.theme.size[64]};
      height: ${(p) => p.theme.size[64]};
    `}

  .UserAvatar__userPhoto-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserAvatar = (props) => {
  return (
    <S.UserAvatar {...props}>
      <img
        className="UserAvatar__userPhoto-image"
        src="/static/images/cat_01.jpg"
        alt=""
      />
    </S.UserAvatar>
  );
};

export default UserAvatar;

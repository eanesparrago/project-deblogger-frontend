import styled from "styled-components";

const FormItem = (props) => {
  const { children } = props;
  return <S.FormItem>{children}</S.FormItem>;
};

const S = {};

S.FormItem = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    flex-flow: column;
    align-items: flex-start;
  }

  > label {
    display: block;
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    width: ${(p) => p.theme.size.free(134)};
    margin-right: ${(p) => p.theme.size[32]};
    flex-shrink: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    > label {
      width: unset;
      margin-bottom: ${(p) => p.theme.size[12]};
      margin-right: 0;
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    > label {
      font-size: 1em;
    }
  }

  > input {
    height: ${(p) => p.theme.size[48]};
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.grey};
    border-radius: 8px;
    padding-left: ${(p) => p.theme.size[16]};

    &:focus {
      border: 1px solid ${(p) => p.theme.color.lightMuted};
    }
  }

  > textarea {
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.grey};
    border-radius: 8px;
    padding: ${(p) => p.theme.size[16]};
    line-height: 150%;

    &:focus {
      border: 1px solid ${(p) => p.theme.color.lightMuted};
    }
  }
`;

export default FormItem;

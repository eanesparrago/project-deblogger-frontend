import styled from "styled-components";

const SearchBox = (props) => {
  return (
    <S.SearchBox {...props}>
      <input type="text" placeholder="Search posts" />
    </S.SearchBox>
  );
};

const S = {};

S.SearchBox = styled.div`
  & > input {
    border: 1px solid ${(p) => p.theme.color.grey};
    height: ${(p) => p.theme.size[48]};
    width: ${(p) => p.theme.size.free(256)};
    border-radius: 8px;
    padding-left: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    & > input {
      width: 100%;
    }
  }

  & > input:focus {
    border: 1px solid ${(p) => p.theme.color.lightMuted};
  }
`;
export default SearchBox;

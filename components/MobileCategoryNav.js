import styled from "styled-components";

const MobileCategoryNav = () => {
  return (
    <S.MobileCategoryNav>
      <a className="MobileCategoryNav__homepage">Homepage</a>
      <a className="MobileCategoryNav__development">Development</a>
      <a className="MobileCategoryNav__design">Design</a>
      <a className="MobileCategoryNav__lesson">Lesson</a>
      <a className="MobileCategoryNav__showcase">Showcase</a>
      <a className="MobileCategoryNav__devLife">Dev Life</a>
      <a className="MobileCategoryNav__random">Random</a>
      <a className="MobileCategoryNav__meta">Meta</a>
    </S.MobileCategoryNav>
  );
};

const S = {};

S.MobileCategoryNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(p) => p.theme.color.dark};
  z-index: 99;
  padding-left: ${(p) => p.theme.size[16]};
  padding-right: ${(p) => p.theme.size[16]};
  padding-top: ${(p) => p.theme.size.free(80)};
  padding-bottom: ${(p) => p.theme.size[24]};
  overflow-y: auto;
  display: none;

  @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
    display: block;
  }

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(p) => p.theme.size[48]};
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.blue}80;
    border-radius: 4px;
    align-items: center;
    font-size: 1.1875em;
    font-weight: 300;
    color: ${(p) => p.theme.color.light};
  }

  & > a:not(:last-child) {
    margin-bottom: ${(p) => p.theme.size[12]};
  }

  .MobileCategoryNav__homepage {
    border: none;
  }

  .MobileCategoryNav__homepage--active {
    color: ${(p) => p.theme.color.primary.main};
    font-weight: 700;
  }

  .MobileCategoryNav__development {
    border: 1px solid ${(p) => p.theme.color.blue}80;
  }

  .MobileCategoryNav__development--active {
    background-color: ${(p) => p.theme.color.blue};
  }

  .MobileCategoryNav__design {
    border: 1px solid ${(p) => p.theme.color.red}80;
  }

  .MobileCategoryNav__design--active {
    background-color: ${(p) => p.theme.color.red};
  }

  .MobileCategoryNav__lesson {
    border: 1px solid ${(p) => p.theme.color.lime}80;
  }

  .MobileCategoryNav__lesson--active {
    background-color: ${(p) => p.theme.color.lime};
    color: ${(p) => p.theme.color.dark};
  }

  .MobileCategoryNav__showcase {
    border: 1px solid ${(p) => p.theme.color.amber}80;
  }

  .MobileCategoryNav__showcase--active {
    background-color: ${(p) => p.theme.color.amber};
    color: ${(p) => p.theme.color.dark};
  }

  .MobileCategoryNav__devLife {
    border: 1px solid ${(p) => p.theme.color.green}80;
  }

  .MobileCategoryNav__devLife--active {
    background-color: ${(p) => p.theme.color.green};
    color: ${(p) => p.theme.color.dark};
  }

  .MobileCategoryNav__random {
    border: 1px solid ${(p) => p.theme.color.purple}80;
  }

  .MobileCategoryNav__random--active {
    background-color: ${(p) => p.theme.color.purple};
    color: ${(p) => p.theme.color.light};
  }

  .MobileCategoryNav__meta {
    border: 1px solid ${(p) => p.theme.color.light}80;
  }

  .MobileCategoryNav__meta--active {
    background-color: ${(p) => p.theme.color.light};
    color: ${(p) => p.theme.color.dark};
  }
`;

export default MobileCategoryNav;

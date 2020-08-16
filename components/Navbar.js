import styled from "styled-components";

const Navbar = (props) => {
  return (
    <S.Navbar {...props}>
      {/* <a href="/" className="Navbar__homepage Navbar__homepage--active">
        Homepage
      </a>
      <a href="/" className="Navbar__development Navbar__development--active">
        Development
      </a>
      <a href="/" className="Navbar__design Navbar__design--active">
        Design
      </a>
      <a href="/" className="Navbar__lesson Navbar__lesson--active">
        Lesson
      </a>
      <a href="/" className="Navbar__showcase Navbar__showcase--active">
        Showcase
      </a>
      <a href="/" className="Navbar__devLife Navbar__devLife--active">
        Dev Life
      </a>
      <a href="/" className="Navbar__random Navbar__random--active">
        Random
      </a>
      <a href="/" className="Navbar__meta Navbar__meta--active">
        Meta
      </a> */}

      <a className="Navbar__homepage">Homepage</a>
      <a className="Navbar__development">Development</a>
      <a className="Navbar__design">Design</a>
      <a className="Navbar__lesson">Lesson</a>
      <a className="Navbar__showcase">Showcase</a>
      <a className="Navbar__devLife">Dev Life</a>
      <a className="Navbar__random">Random</a>
      <a className="Navbar__meta">Meta</a>
    </S.Navbar>
  );
};

const S = {};

S.Navbar = styled.nav`
  & > a {
    display: flex;
    height: ${(p) => p.theme.size[48]};
    width: ${(p) => p.theme.size.free(288)};
    padding-left: ${(p) => p.theme.size.free(128)};
    border: 1px solid ${(p) => p.theme.color.blue}80;
    border-radius: 4px;
    transform: translateX(-${(p) => p.theme.size[32]});
    align-items: center;
    font-size: 1.1875em;
    font-weight: 300;
    color: ${(p) => p.theme.color.light};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
    & > a {
      width: ${(p) => p.theme.size.free(240)};
      padding-left: ${(p) => p.theme.size.free(80)};
    }
  }

  & > a:not(:last-child) {
    margin-bottom: ${(p) => p.theme.size[12]};
  }

  .Navbar__homepage {
    border: none;
  }

  .Navbar__homepage--active {
    color: ${(p) => p.theme.color.primary.main};
    font-weight: 700;
  }

  .Navbar__development {
    border: 1px solid ${(p) => p.theme.color.blue}80;
  }

  .Navbar__development--active {
    background-color: ${(p) => p.theme.color.blue};
  }

  .Navbar__design {
    border: 1px solid ${(p) => p.theme.color.red}80;
  }

  .Navbar__design--active {
    background-color: ${(p) => p.theme.color.red};
  }

  .Navbar__lesson {
    border: 1px solid ${(p) => p.theme.color.lime}80;
  }

  .Navbar__lesson--active {
    background-color: ${(p) => p.theme.color.lime};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__showcase {
    border: 1px solid ${(p) => p.theme.color.amber}80;
  }

  .Navbar__showcase--active {
    background-color: ${(p) => p.theme.color.amber};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__devLife {
    border: 1px solid ${(p) => p.theme.color.green}80;
  }

  .Navbar__devLife--active {
    background-color: ${(p) => p.theme.color.green};
    color: ${(p) => p.theme.color.dark};
  }

  .Navbar__random {
    border: 1px solid ${(p) => p.theme.color.purple}80;
  }

  .Navbar__random--active {
    background-color: ${(p) => p.theme.color.purple};
    color: ${(p) => p.theme.color.light};
  }

  .Navbar__meta {
    border: 1px solid ${(p) => p.theme.color.light}80;
  }

  .Navbar__meta--active {
    background-color: ${(p) => p.theme.color.light};
    color: ${(p) => p.theme.color.dark};
  }
`;

export default Navbar;

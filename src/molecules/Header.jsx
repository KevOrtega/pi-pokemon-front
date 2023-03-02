import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Title from "../atoms/Title";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) => {
    const positions = {
      right: () => "flex-end",
      left: () => "flex-start",
      center: () => "center",
    };
    return positions[position || "left"]();
  }};
  align-items: center;
`;

const TitleContainer = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  padding: 0 1em;
  height: 100%;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  background-color: var(--color-trinidad);
`;

const LinkStyled = styled(NavLink)`
  text-align: center;
  color: ${({ active }) => (active ? "var(--color-curious-blue)" : "var(--color-gray)")};
  font-weight: var(--weight-secondary);
  text-decoration: none;
  text-transform: capitalize;
  margin: 0 2em;
  transition: color 0.3s;

  &:hover {
    color: var(--color-curious-blue);
  }

  &.active {
    color: var(--color-curious-blue);
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <NavStyled>
        <LinksContainer position="right">
          <LinkStyled to="/">home</LinkStyled>
        </LinksContainer>
        <TitleContainer>
          <Title type="bigger">Henry</Title>
        </TitleContainer>
        <LinksContainer>
          <LinkStyled to="/pokemons">pokemons</LinkStyled>
          <LinkStyled to="/createPokemon">create your own pokemon</LinkStyled>
        </LinksContainer>
      </NavStyled>
    </HeaderStyled>
  );
}

export default Header;

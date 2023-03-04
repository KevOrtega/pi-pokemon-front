import { Fragment } from "react";
import styled from "styled-components";
import PokemonCards from "../molecules/PokemonCards";
import Filter from "../molecules/Filter";
import Searcher from "../molecules/Searcher";

const Main = styled.main`
  font-size: 0.9vmax;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 59%;
  height: 90%;
  padding: 2em 1em 0;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8em;
  }
`;
const Aside = styled.aside`
  font-size: 1vmax;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 90%;
  padding: 2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Pokemons() {
  return (
    <Fragment>
      <Main>
        <Searcher />
        <PokemonCards />
      </Main>
      <Aside>
        <Filter />
      </Aside>
    </Fragment>
  );
}

export default Pokemons;

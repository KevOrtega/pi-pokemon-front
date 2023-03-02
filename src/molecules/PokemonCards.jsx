import { useSelector } from "react-redux";
import styled from "styled-components";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";

const PokemonCardsStyled = styled.div`
  width: auto;
  height: auto;
`;

const PokemonContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 2.5em;
`;

function PokemonCards() {
  const pokemons = useSelector(
    ({ current_page, pokemons_store, pokemon_search }) => pokemons_store[Object.values(pokemon_search).join("_")]?.[current_page]
  );

  return (
    <PokemonCardsStyled>
      <Pagination />
      <PokemonContainer>{pokemons && pokemons.map((pokemon) => <PokemonCard {...pokemon} key={pokemon.id} />)}</PokemonContainer>
    </PokemonCardsStyled>
  );
}

export default PokemonCards;

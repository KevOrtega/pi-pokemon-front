import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { getPokemonsStore, getPokemonSearch, getPage } from "../redux/actions";

import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import Filter from "./Filter";

const SearcherContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const SearcherStyled = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4em;
  border-radius: 0.5em;
  background-color: var(--color-white);
`;

const PokeballContainer = styled.div`
  height: 100%;
  background-color: var(--color-trinidad);
  padding: 1em;
`;

const FilterButtonContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const FilterSection = styled.section`
  z-index: -1;
  position: absolute;
  display: flex;
  top: 100%;
  justify-content: center;
  height: 50vh;
  opacity: 0;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);

  ${({ show }) =>
    show &&
    `
    z-index: 1;
    opacity: 1;
    transition: opacity 0.3s;
  `}
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 2em;
`;

function Searcher() {
  const dispatch = useDispatch();
  const [filter_open, setFilterOpen] = useState(false);
  const { current_page, pokemon_search } = useSelector((state) => state);
  const search_found = useSelector(({ current_page, pokemons_store, pokemon_search }) =>
    pokemons_store[Object.values(pokemon_search).join("_")]?.[current_page] ? true : false
  );

  const [searcher, setSearcher] = useState({ value: "", search: "" });

  useEffect(
    () => searcher.search !== pokemon_search.value && dispatch(getPokemonSearch({ ...pokemon_search, value: searcher.search })),
    [dispatch, pokemon_search, searcher.search]
  );

  useEffect(
    () => !search_found && dispatch(getPokemonsStore(pokemon_search, current_page)),
    [dispatch, pokemon_search, search_found, current_page]
  );

  useEffect(() => dispatch(getPage(1)), [dispatch, pokemon_search]);

  const handleChange = ({ target: { value } }) => setSearcher({ ...searcher, value });

  const handleSearch = () => setSearcher({ ...searcher, search: searcher.value });

  const handleFilterClick = () => setFilterOpen(!filter_open);
  return (
    <SearcherContainer>
      <SearcherStyled>
        <PokeballContainer>
          <Image height="100%" type="pokeball" />
        </PokeballContainer>
        <Input
          placeholder="find your favourite pokemon"
          name="searcher"
          type="searcher"
          value={searcher.value}
          onChange={handleChange}
          onBlur={handleSearch}
          onKeyDown={({ keyCode }) => keyCode === 13 && handleSearch()}
        />
        <FilterButtonContainer>
          <Button onClick={handleFilterClick}>
            <Image height="2em" type="filter" />
          </Button>
        </FilterButtonContainer>
      </SearcherStyled>

      <FilterSection show={filter_open}>
        <FilterContainer>{<Filter device="small" />}</FilterContainer>
      </FilterSection>
    </SearcherContainer>
  );
}

export default Searcher;

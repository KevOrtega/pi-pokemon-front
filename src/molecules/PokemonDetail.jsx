import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getPokemonDetail } from "../redux/actions";

import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  background-color: var(--color-white);
  border-radius: 0.5em;
`;

const PokemonContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  transform: translate(3em, -3em);
`;

const TitleContainer = styled.div`
  font-size: 2em;
  width: 70%;
  text-align: center;
`;

const AttributesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  text-align: center;
  font-weight: var(--weight-secondary);
  text-transform: capitalize;
`;

const StatContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3em;
`;

const Stat = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  background-color: ${({ stat }) => {
    const stat_backgrounds = {
      hp: () => "var(--color-trinidad)",
      attack: () => "var(--color-flamingo)",
      defense: () => "var(--color-fruit-salad)",
      speed: () => "var(--color-curious-blue)",
    };
    return stat_backgrounds[stat]();
  }};
  color: var(--color-white);
  font-weight: var(--weight-secondary);
  text-transform: capitalize;
`;

const TypesContainer = styled.div`
  color: var(--color-gray);
  padding-bottom: 5em;
`;

const IdContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  padding: 0.5em;
  height: min-content;
  background-color: var(--color-mine-shaft);
  color: var(--color-white);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  text-align: center;
`;

function PokemonDetail({ id }) {
  const dispatch = useDispatch();
  const pokemon = useSelector(({ pokemons_store }) => pokemons_store[id]);

  useEffect(() => dispatch(getPokemonDetail(id)), [dispatch, id]);

  return pokemon ? (
    <PokemonContainer>
      <PokemonContent>
        <TitleContainer>
          <Title type="big">{pokemon.name}</Title>
        </TitleContainer>
        <AttributesContainer>
          <Text>height: {pokemon.height}</Text>
          <Text> weight: {pokemon.weight}</Text>
        </AttributesContainer>

        <StatContainer>
          {Object.keys(pokemon.stat)
            .filter((stat) => !(stat.includes("pokemon") || stat.includes("id")))
            .map((key) => (
              <Stat stat={key} key={key}>
                <Text>
                  {key}: {pokemon.stat[key]}
                </Text>
              </Stat>
            ))}
        </StatContainer>

        <TypesContainer>
          <Text>{pokemon.types.map(({ name }) => name).join(", ")}</Text>
        </TypesContainer>
      </PokemonContent>

      <ImageContainer>
        <Image width="100%" src={pokemon.image} />
      </ImageContainer>

      <IdContainer>
        <Text>{pokemon.id}</Text>
      </IdContainer>
    </PokemonContainer>
  ) : null;
}

export default PokemonDetail;

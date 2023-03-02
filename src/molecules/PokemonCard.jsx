import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ImageContainer = styled.div`
  width: min-content;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  margin: auto;
  transform: translateY(-50%);
`;

function PokemonCard(pokemon) {
  return (
    <LinkStyled to={`/pokemons/${pokemon.id}`}>
      <Button type="pokemon">
        <ImageContainer>
          <Image height="6em" src={pokemon.image} alt={pokemon.name} />
        </ImageContainer>
        <Title type="small">{pokemon.name}</Title>
        <Text>{pokemon.types?.map(({ name }) => name).join(", ")}</Text>
      </Button>
    </LinkStyled>
  );
}

export default PokemonCard;

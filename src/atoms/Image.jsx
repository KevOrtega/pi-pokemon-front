import styled from "styled-components";
import PokemonUnknown from "../assets/pokemon_unknown.png";
import ArrowBack from "../assets/arrow_back.svg";
import ArrowForward from "../assets/arrow_forward.svg";
import Pokeball from "../assets/pokeball.png";
import Filter from "../assets/filter.svg";
import Ascendant from "../assets/ascendant.svg";
import Descend from "../assets/descend.svg";
import Charmander from "../assets/charmander.png";

const ImageStyled = styled.img`
  ${({ width, height }) => `
    width: ${width || "auto"};
    height: ${height || "auto"};
  `}
`;

function Image({ type, ...props }) {
  const image_types = {
    charizard: () => <ImageStyled {...props} src={Charmander} alt="charmander" />,
    descend: () => <ImageStyled {...props} src={Descend} alt="descend" />,
    ascendant: () => <ImageStyled {...props} src={Ascendant} alt="ascendant" />,
    filter: () => <ImageStyled {...props} src={Filter} alt="filter" />,
    arrow_forward: () => <ImageStyled {...props} src={ArrowForward} alt="forward" />,
    arrow_back: () => <ImageStyled {...props} src={ArrowBack} alt="back" />,
    pokemon_unknown: () => <ImageStyled {...props} src={PokemonUnknown} alt="pokemon unknown" />,
    pokeball: () => <ImageStyled {...props} src={Pokeball} alt="pokeball" />,
    default: () => <ImageStyled {...props} />,
  };
  return image_types[type || "default"]();
}

export default Image;

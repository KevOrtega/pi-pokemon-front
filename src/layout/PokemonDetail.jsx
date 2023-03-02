import { useParams } from "react-router-dom";
import styled from "styled-components";
import MoleculePokemonDetail from "../molecules/PokemonDetail";

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 90%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em;
`;

function PokemonDetail() {
  const { id } = useParams();
  return (
    <Main>
      <MoleculePokemonDetail id={id} />
    </Main>
  );
}

export default PokemonDetail;

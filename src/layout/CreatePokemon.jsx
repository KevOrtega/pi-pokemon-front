import styled from "styled-components";
import CreatePokemonForm from "../molecules/CreatePokemonForm";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2em 1em;
`;

function CreatePokemon() {
  return (
    <Main>
      <CreatePokemonForm />
    </Main>
  );
}

export default CreatePokemon;

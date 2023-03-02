import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

const Main = styled.main`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  padding: 2em;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: var(--color-flamingo);
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 100%;
  padding: 1em;
  border-radius: 0.2em;
  background: linear-gradient(45deg, var(--color-trinidad) 0%, var(--color-flamingo) 80%);
`;

const TitleContainer = styled.div`
  font-size: 2em;
  text-align: left;
  top: 0;
  color: var(--color-white);
  border-radius: 0.5em;
`;

const ButtonContainer = styled.div`
  font-size: 1em;
`;

const ImageContainer = styled.div`
  align-self: flex-end;
  width: 40%;
  min-width: 300px;
  transform: translate(19%);
`;

function Home() {
  return (
    <Fragment>
      <Background />
      <Main>
        <Hero>
          <TitleContainer>
            <Title>Gotta Catch'em All</Title>
          </TitleContainer>
          <ButtonContainer>
            <Link to="/pokemons">
              <Button background_color="var(--color-wild-sand)" type="landing">
                pokemons
              </Button>
            </Link>
            <Link to="/createPokemon">
              <Button background_color="var(--color-flamingo)" color="var(--color-white)" type="landing">
                create your pokemon
              </Button>
            </Link>
          </ButtonContainer>
          <ImageContainer>
            <Image type="charizard" width="100%" />
          </ImageContainer>
        </Hero>
      </Main>
    </Fragment>
  );
}

export default Home;

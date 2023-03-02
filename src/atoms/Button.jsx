import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 0.5em;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: none;
  }
`;

const PokemonButton = styled(ButtonStyled)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 1em;
  box-shadow: 0.3em 0.3em 0.5em var(--color-gray-semi-transparent);
  background-color: var(--color-white);
  width: 15em;
  height: 7.5em;
  margin: 1.5em 0.3em;
  border-bottom: 0.4em solid transparent;
  transition: transform 0.2s, border-bottom 0.2s, box-shadow 0.2s;

  &:hover {
    border-bottom: 0.4em solid var(--color-trinidad);
    box-shadow: 0.1em 0.5em 0.5em var(--color-gray-semi-transparent);
    transform: translateY(-0.5em);
  }

  &:active {
    box-shadow: 0.1em 0.1em 0.1em var(--color-gray-semi-transparent);
    transform: none;
  }
`;

const PaginationButton = styled(ButtonStyled)`
  height: 2em;
`;

const ButtonSubmit = styled(ButtonStyled)`
  background-color: var(--color-white);
  color: var(--color-fruit-salad);
  font-weight: var(--weight-secondary);
  text-transform: uppercase;
  margin: 0.5em;
  padding: 1.5em 3em;
  border-radius: 1em;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0.3em 0.3em 0.5em var(--color-gray-semi-transparent);
    transform: none;
  }

  &:active {
    box-shadow: none;
    transform: none;
  }
`;

const LandingButton = styled(ButtonStyled)`
  ${({ background_color, color }) => `
    background-color: ${background_color};
    color: ${color}
  `};
  font-weight: var(--weight-secondary);
  text-transform: uppercase;
  margin: 0.5em;
  padding: 0.8em;
  border-radius: 0.3em;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0.3em 0.3em 0.5em var(--color-gray-semi-transparent);
    transform: none;
  }

  &:active {
    box-shadow: none;
    transform: none;
  }
`;

function Button({ type, ...props }) {
  const button_types = {
    landing: () => <LandingButton {...props} />,
    pagination: () => <PaginationButton {...props} />,
    pokemon: () => <PokemonButton {...props} />,
    submit: () => <ButtonSubmit {...props} />,
    default: () => <ButtonStyled {...props} />,
  };
  return button_types[type || "default"]();
}

export default Button;

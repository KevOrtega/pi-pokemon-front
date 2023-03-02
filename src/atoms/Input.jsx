import styled from "styled-components";

const Label = styled.label`
  position: relative;
  display: block;
  margin: 0.5em;
  & > input {
    font-size: 1.3em;
    display: block;
    padding: 0.6em;
    min-width: fit-content;
    min-height: fit-content;
    width: 100%;
    border: none;
    border-radius: 0.5em;
    outline: none;
    transition: padding-top 0.2s ease, padding-bottom 0.2s ease;
    background-color: var(--color-white);
    font-weight: bold;
    &::placeholder {
      transition: color 0.2s ease;
      color: var(--color-gray-semi-transparent);
      font-weight: bold;
    }
    &:focus {
      padding-top: 2em;
      padding-bottom: 1em;
      &::placeholder {
        color: transparent;
      }
      & + span {
        display: block;
        opacity: 1;
        top: 0.5em;
        display: block;
      }
    }
  }
  span {
    color: var(--color-gray-semi-transparent);
    position: absolute;
    top: 0px;
    left: 0.5em;
    display: none;
    opacity: 0;
    transition: opacity 0.2s ease, top 0.2s ease;
  }
`;

const RadioLabel = styled.label`
  background-color: var(--color-white);
  box-shadow: 0.3em 0.3em 0.3em var(--color-gray-semi-transparent);
  margin: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: border-left 0.1s;

  ${({ checked }) =>
    checked &&
    `
  box-shadow: 0.1em 0.1em 0.1em var(--color-gray-semi-transparent);
  border-left: 0.3em solid var(--color-fruit-salad);
  & > span {
    color: var(--color-fruit-salad)
  }
  `};

  & > span {
    padding-left: 0.3em;
    transition: color 0.3s;
  }

  & > input {
    display: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: 0.3em 0.3em 0.3em var(--color-gray-semi-transparent);
  padding: 0.5em 1em;
  margin: 0.5em;
  cursor: pointer;
  transition: box-shadow 0.1s;
  ${({ checked }) =>
    checked && `color: var(--color-curious-blue); box-shadow: 0.1em 0.1em 0.1em var(--color-gray-semi-transparent);`}

  & > input {
    height: 1em;
    margin-right: 0.3em;
    display: none;
  }
`;

const SearcherLabel = styled(Label)`
  width: 100%;
  height: 100%;
  & > input {
    width: 100%;
    height: 100%;
  }
`;

const Pagination = styled.input`
  border-radius: 0.5em;
  border: none;
  outline: none;
  padding: 0.3em;
  width: 3.5em;
  text-align: center;
  height: min-content;
`;

function Input({ placeholder, type, ...props }) {
  const input_types = {
    pagination: () => <Pagination type="number" {...props} />,
    searcher: () => (
      <SearcherLabel>
        <input placeholder={placeholder} {...props} />
        <span>{placeholder}</span>
      </SearcherLabel>
    ),
    checkbox: () => (
      <CheckboxLabel checked={props.checked}>
        <input type="checkbox" {...props} />
        {placeholder}
      </CheckboxLabel>
    ),
    radio: () => (
      <RadioLabel checked={props.checked}>
        <input type="radio" {...props} />
        <span>{placeholder}</span>
      </RadioLabel>
    ),
    number: () => (
      <Label>
        <input placeholder={placeholder} type="number" {...props} />
        <span>{placeholder}</span>
      </Label>
    ),
    text: () => (
      <Label>
        <input placeholder={placeholder} {...props} />
        <span>{placeholder}</span>
      </Label>
    ),
  };
  return input_types[type || "text"]();
}

export default Input;

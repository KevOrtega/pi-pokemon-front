import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNewPokemon } from "../redux/actions";

import CheckboxList from "./CheckboxList";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;

  fieldset {
    min-width: 20%;
    padding: 1em;
    border: none;
  }
`;

function CreatePokemonForm() {
  const dispatch = useDispatch();
  const { pokemon_types } = useSelector((state) => state);
  const [attributes, setAttributes] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });
  const [types, setTypes] = useState([]);
  const [image_preview, setImagePreview] = useState("");
  const handleChange = ({ target: { name, value } }) => setAttributes({ ...attributes, [name]: value });

  const handleTypesChange = useCallback((types) => setTypes(types), [setTypes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNewPokemon({ ...attributes, types }));
  };

  const handleImageOnBlur = () => setImagePreview(attributes.image.length ? attributes.image : "");

  return (
    <FormStyled onSubmit={handleSubmit}>
      <fieldset>
        <Input name="name" onChange={handleChange} placeholder="name*" value={attributes.name} />
        <Input name="image" onChange={handleChange} onBlur={handleImageOnBlur} placeholder="image*" value={attributes.image} />
        <Input min={1} name="height" onChange={handleChange} placeholder="height" type="number" value={attributes.height} />
        <Input min={1} name="weight" onChange={handleChange} placeholder="weight" type="number" value={attributes.weight} />

        <Title>Stat</Title>
        <Input min={1} name="hp" onChange={handleChange} placeholder="hp*" type="number" value={attributes.hp} />
        <Input min={1} name="attack" onChange={handleChange} placeholder="attack*" type="number" value={attributes.attack} />
        <Input min={1} name="defense" onChange={handleChange} placeholder="defense*" type="number" value={attributes.defense} />
        <Input min={1} name="speed" onChange={handleChange} placeholder="speed" type="number" value={attributes.speed} />

        <Title>Types</Title>
        <CheckboxList values={pokemon_types} onChange={handleTypesChange} />

        <Button type="submit">submit</Button>
      </fieldset>

      <fieldset>
        <Title>Preview</Title>
        <Image width="100%" type={!image_preview.length && "pokemon_unknown"} src={image_preview} alt="not found" />
        <Text>name: {attributes.name}</Text>
        <Text>height: {attributes.height}</Text>
        <Text>weight: {attributes.weight}</Text>
        <Text>hp: {attributes.hp}</Text>
        <Text>attack: {attributes.attack}</Text>
        <Text>defense: {attributes.defense}</Text>
        <Text>speed: {attributes.speed}</Text>
        <Text>types: {types.join(", ")}</Text>
      </fieldset>
    </FormStyled>
  );
}

export default CreatePokemonForm;

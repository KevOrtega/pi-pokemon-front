import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getPokemonSearch } from "../redux/actions";

import CheckboxList from "./CheckboxList";
import Input from "../atoms/Input";
import Title from "../atoms/Title";
import Image from "../atoms/Image";

const FilterContainer = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--color-white);
  border-radius: 1em;
  padding: 0.2em;
`;

const OrderSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.8em;
  ${({ width }) => `width: ${width}`};
`;

function Filter({ device = "big" }) {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const { pokemon_types, pokemon_search } = useSelector((state) => state);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [device]);

  const handleChange = ({ target: { value } }) => dispatch(getPokemonSearch({ ...pokemon_search, order: value }));

  const handleTypesChange = useCallback(
    (types) => pokemon_search.types.length !== types.length && dispatch(getPokemonSearch({ ...pokemon_search, types })),
    [dispatch, pokemon_search]
  );

  return (
    ((device === "big" && width > 768) || (device === "small" && width <= 768)) && (
      <FilterContainer>
        <Title type="big">Filters</Title>
        <Title>Types</Title>
        <CheckboxList values={[...pokemon_types, "created"]} onChange={handleTypesChange} />
        <OrderSection>
          <OrderContainer width="100%">
            <Title>Order</Title>
            <Input
              placeholder="default"
              name="order"
              type="radio"
              value=""
              onChange={handleChange}
              checked={pokemon_search.order === ""}
            />
          </OrderContainer>
          <OrderContainer>
            <Title type="small">Alphabetical</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="alphabeticalASC"
              onChange={handleChange}
              checked={pokemon_search.order === "alphabeticalASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="alphabeticalDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "alphabeticalDESC"}
            />
          </OrderContainer>
          <OrderContainer>
            <Title type="small">Height</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="heightASC"
              onChange={handleChange}
              checked={pokemon_search.order === "heightASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="heightDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "heightDESC"}
            />
          </OrderContainer>
          <OrderContainer>
            <Title type="small">Weight</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="weightASC"
              onChange={handleChange}
              checked={pokemon_search.order === "weightASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="weightDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "weightDESC"}
            />
          </OrderContainer>
          <OrderContainer>
            <Title type="small">HP</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="hpASC"
              onChange={handleChange}
              checked={pokemon_search.order === "hpASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="hpDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "hpDESC"}
            />
          </OrderContainer>

          <OrderContainer>
            <Title type="small">Attack</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="attackASC"
              onChange={handleChange}
              checked={pokemon_search.order === "attackASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="attackDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "attackDESC"}
            />
          </OrderContainer>
          <OrderContainer>
            <Title type="small">Defense</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="defenseASC"
              onChange={handleChange}
              checked={pokemon_search.order === "defenseASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="defenseDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "defenseDESC"}
            />
          </OrderContainer>

          <OrderContainer>
            <Title type="small">Speed</Title>
            <Input
              placeholder={<Image type="ascendant" width="1em" />}
              name="order"
              type="radio"
              value="speedASC"
              onChange={handleChange}
              checked={pokemon_search.order === "speedASC"}
            />
            <Input
              placeholder={<Image type="descend" width="1em" />}
              name="order"
              type="radio"
              value="speedDESC"
              onChange={handleChange}
              checked={pokemon_search.order === "speedDESC"}
            />
          </OrderContainer>
        </OrderSection>
      </FilterContainer>
    )
  );
}

export default Filter;

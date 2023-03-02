import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getNotification, getPage } from "../redux/actions";

import Input from "../atoms/Input";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function Pagination() {
  const dispatch = useDispatch();
  const current_page = useSelector(({ current_page }) => current_page);
  const [page_selected, setPageSelected] = useState(current_page);
  const pages =
    useSelector(({ pokemons_store, pokemon_search }) => pokemons_store[Object.values(pokemon_search).join("_")]?.pages) || 1;

  useEffect(() => setPageSelected(current_page), [current_page]);

  const handleClick = (action) => (action === "back" ? dispatch(getPage(current_page - 1)) : dispatch(getPage(current_page + 1)));

  const handlePageSelected = ({ target: { value } }) => {
    if (value >= 1 && value <= pages) {
      dispatch(getPage(Number(value)));
      return;
    }
    dispatch(getNotification({ type: "error", message: "pokemon page not found" }));
    setPageSelected(current_page);
  };

  const handleKeyDown = ({ target, keyCode }) => keyCode === 13 && target.blur();

  const handleChange = ({ target: { value } }) => setPageSelected(Number(value));

  return (
    <PaginationContainer>
      {current_page !== 1 && (
        <Button type="pagination" onClick={() => handleClick("back")}>
          <Image height={"100%"} type="arrow_back" alt="back page" />
        </Button>
      )}
      <Input
        type="pagination"
        onChange={handleChange}
        onClick={handlePageSelected}
        onKeyDown={handleKeyDown}
        onBlur={handlePageSelected}
        value={page_selected}
        min={1}
        max={pages}
      />
      &nbsp; of {pages}
      {current_page !== pages && (
        <Button type="pagination" onClick={() => handleClick("forward")}>
          <Image height={"100%"} type="arrow_forward" alt="forward page" />
        </Button>
      )}
    </PaginationContainer>
  );
}

export default Pagination;

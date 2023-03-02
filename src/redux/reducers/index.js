import {
  GET_POKEMONS_STORE,
  GET_POKEMON_SEARCH,
  GET_POKEMON_TYPES,
  GET_POKEMON_DETAIL,
  GET_NEW_POKEMON,
  GET_PAGE,
  GET_NOTIFICATION,
} from "../actions";

const initialState = {
  pokemons_store: {},
  pokemon_search: {
    value: "",
    types: [],
    order: "",
  },
  current_page: 1,
  pokemon_types: [],
  notification: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_STORE:
      return {
        ...state,
        pokemons_store: {
          ...state.pokemons_store,
          [Object.values(action.payload.search).join("_")]: {
            ...state.pokemons_store[Object.values(action.payload.search).join("_")],
            pages: state[Object.values(action.payload.search).join("_")]?.pages || action.payload.pages,
            [action.payload.page]: action.payload.pokemons,
          },
        },
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemons_store: {
          ...state.pokemons_store,
          [action.payload.id]: action.payload.pokemon,
        },
      };
    case GET_POKEMON_SEARCH:
      return { ...state, pokemon_search: { ...state.pokemon_search, ...action.payload } };
    case GET_POKEMON_TYPES:
      return { ...state, pokemon_types: action.payload };
    case GET_NEW_POKEMON:
      const pokemons_created_key = Object.keys(state.pokemons_store)
        .filter((key) => key.includes("created"))
        .map((key) => [key, null]);
      return {
        ...state,
        pokemons_store: {
          ...state.pokemons_store,
          ...Object.fromEntries(pokemons_created_key),
        },
      };
    case GET_PAGE:
      return { ...state, current_page: action.payload };
    case GET_NOTIFICATION:
      return { ...state, notification: action.payload || null };
    default:
      return { ...state };
  }
}

export default reducer;

import axios from "axios";

export const GET_POKEMONS_STORE = "GET_POKEMONS_STORE";
export const GET_POKEMON_SEARCH = "GET_POKEMONS_SEARCH";
export const GET_POKEMON_TYPES = "GET_POKEMON_TYPES";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_NEW_POKEMON = "GET_NEW_POKEMON";
export const GET_PAGE = "GET_PAGE";
export const GET_NOTIFICATION = "GET_NOTIFICATION";

export function getPokemonsStore(search, page) {
  return async function (dispatch) {
    return axios
      .get(
        `http://localhost:3001/pokemons?name=${search.value || ""}&types=${search.types || ""}&order=${search.order || ""}&page=${
          page || 1
        }`
      )
      .then(({ data: { pokemons, pages } }) => dispatch({ type: GET_POKEMONS_STORE, payload: { search, pokemons, pages, page } }))
      .catch((_err) => dispatch(getNotification({ message: "pokemons not found", type: "error" })));
  };
}

export function getPokemonDetail(id) {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then(({ data: pokemon }) => dispatch({ type: GET_POKEMON_DETAIL, payload: { pokemon, id } }))
      .catch((_err) => dispatch(getNotification({ message: `${id} not found`, type: "error" })));
  };
}

export function getPokemonSearch(search) {
  return { type: GET_POKEMON_SEARCH, payload: search };
}

export function getPokemonTypes() {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/types`)
      .then(({ data: types }) => dispatch({ type: GET_POKEMON_TYPES, payload: types.map(({ name }) => name) }))
      .catch((_err) => dispatch(getNotification({ type: "error", message: "types not found. Please restart the website" })));
  };
}

export function getNewPokemon(pokemon) {
  if (!pokemon.name || !pokemon.image || !pokemon.hp || !pokemon.attack || !pokemon.defense)
    return getNotification({ type: "error", message: "name, image, hp, attack and defense are needed to create a pokemon" });

  const new_pokemon = {
    stat: {},
  };

  const attributes_methods = {
    name: () => {
      if (pokemon.name.length) new_pokemon.name = pokemon.name;
    },
    image: () => {
      if (pokemon.image.length) new_pokemon.image = pokemon.image;
    },
    height: () => {
      if (pokemon.height.length) new_pokemon.height = Number(pokemon.height);
    },
    weight: () => {
      if (pokemon.weight.length) new_pokemon.weight = Number(pokemon.weight);
    },
    hp: () => {
      if (pokemon.hp.length) new_pokemon.stat.hp = Number(pokemon.hp);
    },
    attack: () => {
      if (pokemon.attack.length) new_pokemon.stat.attack = Number(pokemon.attack);
    },
    defense: () => {
      if (pokemon.defense.length) new_pokemon.stat.defense = Number(pokemon.defense);
    },
    speed: () => {
      if (pokemon.speed.length) new_pokemon.stat.speed = Number(pokemon.speed);
    },
    types: () => {
      if (pokemon.types.length) new_pokemon.types = pokemon.types;
    },
  };
  Object.keys(pokemon).forEach((attr) => attributes_methods[attr]());

  return async function (dispatch) {
    return axios
      .post(`http://localhost:3001/pokemons`, new_pokemon)
      .then(() => dispatch({ type: GET_NEW_POKEMON }))
      .then(() => dispatch(getNotification({ type: "success", message: "pokemon successfully created" })))
      .catch((_err) => dispatch(getNotification({ type: "error", message: "create pokemon failed" })));
  };
}

export function getPage(num) {
  return { type: GET_PAGE, payload: num };
}

export function getNotification({ message, type }) {
  return type === "clean" ? { type: GET_NOTIFICATION } : { type: GET_NOTIFICATION, payload: { message, type } };
}

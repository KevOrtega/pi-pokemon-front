import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { getPokemonTypes } from "./redux/actions";

import Home from "./layout/Home";
import Pokemons from "./layout/Pokemons";
import PokemonDetail from "./layout/PokemonDetail";
import CreatePokemon from "./layout/CreatePokemon";
import Notification from "./molecules/Notification";
import Header from "./molecules/Header";

function App() {
  // get types
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Notification position="right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
        <Route path="/createPokemon" element={<CreatePokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

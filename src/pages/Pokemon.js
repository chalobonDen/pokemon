import React from 'react';
import { useState, useEffect } from 'react';
import './Pokemon.css';
import Skeleton from '../components/Skeleton/Skeleton';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loadding, setLoadding] = useState(false);
  const pokemon_number = 104;
  const pokemonArray = [];

  const pokemonList = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
      pokemonArray.push(await fetchPokemon(i));
    }
    setPokemon(pokemonArray);
    setLoadding(true);
  };

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const fetchResponse = await response.json();
    return fetchResponse;
  };

  useEffect(() => {
    pokemonList();
  });

  return (
    <div className="pokemon-container">
      <h3>Test fetch API</h3>

      <div className="pokemon-list">
        {loadding
          ? pokemon.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="pokemon-img"
                    src={item.sprites.front_default}
                    alt=""
                  />
                  <div className="pokemon-name">
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })
          : Array(pokemon_number)
              .fill()
              .map((_, i) => {
                return <Skeleton key={i} />;
              })}
      </div>
    </div>
  );
};

Pokemon.propTypes = {};

export default Pokemon;

import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {FETCH_POKEMONS} from '../graphql/FetchPokemons'
import PokemonCard from '../components/PokemonCard';
function PokemonsContainer() {
    const {data:{pokemons=[]}={}} =useQuery(FETCH_POKEMONS,{
        variables:{first:9},
    } )
    return (
        <div className="container">
            {pokemons && pokemons.map((pokemon,i) => <PokemonCard key={pokemon.id} pokemon={pokemon} index={i}/>)}
        </div>
    )
}

export default PokemonsContainer

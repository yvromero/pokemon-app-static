/* eslint-disable import/no-anonymous-default-export */

// Guardar en localStorage un pokemon
const toggleFavorite = ( id: number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    if ( favorites.includes(id) ) {

        favorites = favorites.filter( pokeID => pokeID !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ));
}

// Verificar si el pokemon existe
const existInFavorites = ( id: number ): boolean => {

    if ( typeof window === 'undefined' ) return false;
    
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
}

const pokemons = (): number[] => {

    return JSON.parse( localStorage.getItem('favorites') || '[]');

}

export default {
    existInFavorites,
    toggleFavorite,
    pokemons,
}
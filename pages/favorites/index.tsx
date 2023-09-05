import { useEffect, useState } from 'react';

import { localFavorites } from '@/utils';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() );
  },[]);


  return (
    <Layout title='Mis Pokemones Favoritos>'>

      {
        favoritePokemons.length === 0
          ? ( <NoFavorites/> )
          : ( 
              <FavoritePokemons pokemons={ favoritePokemons }/>
            ) 
      }


    </Layout>
  )
};

export default FavoritesPage;

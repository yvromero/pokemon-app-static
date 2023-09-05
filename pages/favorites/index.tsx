import { useEffect, useState } from 'react';

import { Layout } from '@/components/layouts';
import { localFavorites } from '@/utils';
import { NoFavorites } from '@/components/ui';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() );

  },[]);


  return (
    <Layout 
      title='Mis Pokemones Favoritos>'>
      <NoFavorites/>
    </Layout>
  )
};

export default FavoritesPage;

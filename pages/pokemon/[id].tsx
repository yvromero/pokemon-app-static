import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

interface Props {
  pokemon: Pokemon;

}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  console.log(pokemon);
  return (
    <Layout title='Algun pokemon'>
        <h1>{pokemon.name}</h1>
    </Layout>
  )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons649 = [...Array(649)].map( ( value, index ) => `${ index + 1 }` );


  return {
    paths: pokemons649.map( id => ({
      params:{ id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  

return {
  props: {
    pokemon: data
  }
}
}

export default PokemonPage

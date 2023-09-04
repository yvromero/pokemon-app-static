import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Layout } from '@/components/layouts';
import { useRouter } from 'next/router';

interface Props {
  //pokemon: any;
  id: string;
  name: string;

}

const PokemonPage: NextPage<Props> = ({ id, name }) => {

  const router = useRouter();
  console.log(router.query);
  
  return (
    <Layout title='Algun pokemon'>
        <h1>{ id } - { name }</h1>
    </Layout>
  )
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons649 = [...Array(649)].map( ( value, index ) => `${ index + 1 }` );
  console.log({pokemons649});

  return {
    paths: pokemons649.map( id => ({
      params:{ id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  //const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=1281');
  

return {
  props: {
    id: 1,
    name: 'Bulbasaur'
  }
}
}

export default PokemonPage

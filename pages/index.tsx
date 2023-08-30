import { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = (props) => {



  return (
      <Layout title='Listado de Pokémons'>

        <ul>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
          <li>Pokémon</li>
        </ul>
      </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  console.log('Hola mundo');

  return {
    props: {
      
    }
  }
}

export default HomePage;
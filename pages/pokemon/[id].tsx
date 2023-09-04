import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { Button, Container, Grid, Card, Text, Image } from '@nextui-org/react';

interface Props {
  pokemon: Pokemon;

}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  //console.log(pokemon);
  return (
    <Layout title='Algun pokemon'>
      <Grid.Container 
        css={{ marginTop: '5px' }}
        gap={ 2 }
        >
        <Grid xs={ 12 } sm={ 4 }>
          <Card hoverable css={{ padding: '30px'}}>
            <Card.Body>
              <Card.Image
              src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
              alt='{ pokemon.name }'
              width="100%"
              height={ 300 }
              />
            </Card.Body>
          </Card>
        </Grid>
        
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
          <Card.Header css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',

              '@media (min-width: 500px)': {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              },
          }}>
            <Text h1 css={{ 
              textTransform: 'capitalize',
              fontFamily: 'cursive', 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}>
              {pokemon.name}
            </Text>

            <Button
              color="gradient"
              ghost
              css={{
                marginTop: '5px',
                marginLeft: 'auto',
              }}
            >
              Favoritos
            </Button>
          </Card.Header>

              <Card.Body>
                <Text size={30} css={{
                fontFamily: 'cursive',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
              }} >Sprites</Text>
                <Container direction='row'>
                  <Image
                    src={ pokemon.sprites.front_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image
                    src={ pokemon.sprites.back_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                </Container>
              </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
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

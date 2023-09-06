import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Container, Grid, Card, Text, Image } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '@/components/layouts';
import { getPokemonInfo, localFavorites } from '@/utils';
import { pokeApi } from '@/api';
import { Pokemon, PokemonListResponse } from '@/interfaces';


interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {


  const [isInFavorites, setisInFavorites] = useState( localFavorites.existInFavorites( pokemon.id ));


  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id );
    setisInFavorites( !isInFavorites );

    if ( isInFavorites ) return;

    var defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.99,
      startVelocity: 30,
      origin: {
        x: 1,
        y: 0,
      },
      shapes: ['star'],
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };
    
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 100,
        scalar: 1.2,
        shapes: ['star']
      });
    
      confetti({
        ...defaults,
        particleCount: 100,
        scalar: 0.75,
        shapes: ['circle']
      });
    }
    
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}


        return (

          <Layout title={ pokemon.name }>

            <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              <Grid xs={ 12 } sm={ 4 } >
                <Card hoverable css={{ padding: '30px' }}>

                  <Text h2 css={{ 
                    textTransform: 'capitalize',
                    fontFamily: '$mono',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center'
                  }}>

                    {pokemon.name}

                  </Text>

                    <Card.Body>
                      <Card.Image 
                        src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                        alt={ pokemon.name }
                        width="100%"
                        height={ 200 }
                      />
                    </Card.Body>
                </Card>
              </Grid>

              <Grid xs={ 12 } sm={ 8 }>
                <Card>
                  <Card.Header>
                    <Text size={30} css={{
                      fontFamily: '$mono',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}>
                      Sprites
                    </Text>

                    <Button
                      color="gradient"
                      ghost={ !isInFavorites }
                      onClick={ onToggleFavorite }
                        css={{
                          marginLeft: 'auto',
                          textTransform: 'none',
                          fontFamily: '$mono',
                        }}>
                        { isInFavorites ? 'En Favoritos' : 'Agregar a Favoritos' }
                    </Button>
                  </Card.Header>


              <Card.Body>
                <Container direction="row" gap={2} justify="center" wrap="wrap">
                  <Grid.Container gap={2}>

                    <Grid xs={12} sm={6} md={3}>
                      <Image
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <Image
                        src={pokemon.sprites.back_default}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <Image
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                      />
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                      <Image
                        src={pokemon.sprites.back_shiny}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                        />
                      </Grid>
                    </Grid.Container>
                  </Container>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Layout>
    )
};

//https://pokeapi.co/api/v2/pokemon?limit=151
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=649');
    const pokemonNames: string[] = data.results.map( pokemon => pokemon.name );

  return {
    paths: pokemonNames.map(name => ({
      params: { name }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { name } = params as { name: string };

  const pokemon =  await getPokemonInfo( name );

  if ( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }



  return {
    props: {
      pokemon
    }
  }
}

export default PokemonByNamePage;



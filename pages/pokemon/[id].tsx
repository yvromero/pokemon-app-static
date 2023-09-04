import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { Button, Container, Grid, Card, Text, Image } from '@nextui-org/react';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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
                      ghost
                        css={{
                          marginLeft: 'auto',
                          textTransform: 'none',
                          fontFamily: '$mono',
                        }}>
                          Guardar en favoritos
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


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons649 = [...Array(649)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons649.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;

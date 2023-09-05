import { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
    pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (

        <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
        {
            pokemons.map( id => (
                // eslint-disable-next-line react/jsx-key
                <FavoriteCardPokemon key={ id } pokemonId={ id }/>
            ))
        }
        </Grid.Container>
    )
}

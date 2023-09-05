/* eslint-disable jsx-a11y/alt-text */
import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSefl: 'center'
        }}>
            <Text h3 css={{ 
                fontFamily: '$mono',
                textAlign: 'center'
            }}>
            No tienes favoritos
            </Text>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg'
                width={250}
                height={250}
                
                css={{
                    opacity: 0.1
            }}/>
            </Container>
    )
}

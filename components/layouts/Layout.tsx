import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface Props {

    title?: string,
    children: ReactNode,
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> {title || 'Pokemon App'} </title>
            <meta name="author" content="Yvonne Romero" />
            <meta name="description" content={`Informacion sobre el Pokémon ${ title }`}/>
            < meta name="keywords" content={`${ title } pokemon, pokedex `} />
        </Head>


        <Navbar/>

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}

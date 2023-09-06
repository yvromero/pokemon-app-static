import { FC } from 'react';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {

    title?: string,
    children: ReactNode,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  console.log({origin});


  return (
    <>
        <Head>
            <title> {title || 'Pokemon App'} </title>
            <meta name="author" content="Yvonne Romero" />
            <meta name="description" content={`Información sobre el Pokémon ${ title }`}/>
            < meta name="keywords" content={`${ title } pokémon, pokedex `} />

            <meta property="og:title" content={`Información sobre ${ title}`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title}`} />
            <meta property="og:image" content={`${origin}/img/pokemon.png`} />
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

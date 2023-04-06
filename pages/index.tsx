import { GetStaticProps } from 'next'

import Layout from '@/src/components/Layout'
import GameList from '@/src/components/GameList'

import type { NextPage } from 'next'
import  type{ GameType } from '@/src/types/models'

import styles from '@/styles/Home.module.css'

type Props = {
  games: GameType[]
}

//?: Reference color palatte for this project : https://colorhunt.co/palette/635985443c6839305318122b

const Home: NextPage<Props> = ({ games }: Props) => {
  return (
    <div className={styles.container}>
      <Layout title={"Welcome to Team 17 Game Store | Select and Preview your Favourite Game !"}>
        <GameList filteredGames={games} />
      </Layout>
    </div>
 )
}

export default Home

export const getStaticProps: GetStaticProps<{ games: GameType[] }> = async() => {
  const res = await fetch('https://store.xsolla.com/api/v2/project/36867/items/game?locale=en', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const { items } = await res.json();
  return {
    props: {
      games: items
    }
  }
}

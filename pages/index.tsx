import { GetStaticProps } from 'next'
import { useEffect, useState, ChangeEvent } from 'react'

import Layout from '@/src/components/Layout'
import GameList from '@/src/components/GameList'
import SearchBar from '@/src/components/SearchBar'

import type { NextPage } from 'next'

import styles from '@/styles/Home.module.css'
import { GameType } from '@/src/types/models'

type Props = {
  games: GameType[]
}

//?: Reference color palatte for this project : https://colorhunt.co/palette/635985443c6839305318122b

const Home: NextPage<Props> = ({ games }: Props) => {
  const [search, setSearch] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  }

  const filteredGames = games.filter((game) => {
    return game.name.toLowerCase().includes(search);
  })


  return (
    <Layout
      title="Welcome to Team 17 Game Store | Select and Preview your Favourite Game !"
    >
      <div className={styles.container}>
        <SearchBar
          type="text"
          placeholder="Search Game Here..."
          onChange={handleSearch}
        />
        <div> 
          <GameList filteredGames={filteredGames} />
        </div>
      </div>
    </Layout>
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

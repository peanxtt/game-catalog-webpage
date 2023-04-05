import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'

import Layout from '@/src/components/Layout'
import Loading from '@/src/components/Loading'

import type { NextPage } from 'next'
import type { GameType, unitItem } from '@/src/types/models'

import styles from './Game.module.css'

type Props = {
  game: GameType
}

const Game: NextPage<Props> = ({ game }) => {
  const [values, setValues] = useState<unitItem>();

  useEffect(() => {
    setValues(game.unit_items[0]);
  }, [])

  if(!values) return <Loading />
  return (
    <Layout
      title={`${game.name} | Team 17 Games Store`}
    >
      <div className={styles.container}>
        <Link href='/' passHref>
          Return to All Games
        </Link>
          <br />
          <br />
        <div>
          <img src={game.image_url} alt={game.name} className={styles.image} />
          <h1>{game.name}</h1>
          <div>
            <span>Available On: {values.drm_name}</span>
            <span>Price: {values.price.currency} {values.price.amount}</span>
          </div>
        </div>
      </div>
    </Layout>
 )
};

export default Game;


export const getServerSideProps: GetServerSideProps<{ game: GameType }> = async(context) => {
  const { id } = context.query;
  const res = await fetch(`https://store.xsolla.com/api/v2/project/36867/items/id/${id}`, {
    method: 'GET',
    headers: {
      'connection': 'keep-alive',
      'Content-Type': 'application/json'
    }
  });
  console.log(res);
  const game = await res.json();
  return {
    props: {
      game
    }
  }
}


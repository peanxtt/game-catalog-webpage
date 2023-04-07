import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'

import Layout from '@/src/components/Layout'
import Loading from '@/src/components/Loading'

import type { NextPage } from 'next'
import { conversionRateSchema } from '@/src/types/models'
import type { GameType, unitItem } from '@/src/types/models'

import styles from './Game.module.css'
import Steam from '@/src/components/Icons/Steam'

type Props = {
  game: GameType
}

//? Mock game detail description reference : https://videogameipsum.netlify.app/

const Game: NextPage<Props> = ({ game }) => {
  const conversionRate =  conversionRateSchema.parse(process.env.CONVERSION_RATE);
  const [values, setValues] = useState<unitItem>();
  const [price, setPrice] = useState('');

  useEffect(() => {
    setValues(game.unit_items[0]);

    if(game.unit_items[0].price.currency === 'USD') {
      const amount = (parseInt(game.unit_items[0].price.amount_without_discount) * conversionRate).toFixed(2);
      setPrice(amount);
    } else {
      setPrice(game.unit_items[0].price.amount_without_discount);
    }
  }, [])

  if(!values || !game) return <Loading />
  return (
    <Layout title={`${game.name} | Preview | Team 17 Games Store`}>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.image}>
            <img src={game.image_url} alt={`${game.name} - ${game.description}`} />
          </div>

          <h1>{game.name}</h1>

          <div className={styles.description}>
            <p>
              Theorycraft charge attack level Easter egg Metal Gear chams Sandbox Mass Effect. God Mode shoulder buttons Just Dance rng hack time attack Driving Game Borderlands Counter-Strike.
            </p>
          </div>

          <div className={styles.price}>RM {price}</div>

          <div className={styles.descriptionSection}>
            <div className={styles.sectionContent}>
              <h2>About This Game</h2>

              <div className={styles.description}>
                <p>
                  Model pixel hunting GBA flicker MMORPG dpm anti-aliasing. Chiptune ban Game Shark beastiary grinding exploit developer Metal Gear trigger.
                </p>
                <p>
                  Simulation game Tekken secret character Action game gold sink Pac-Man speedrun NPC PlayStation 4 touchscreen Flying Simulator Konami code. Halo Sprite Rush role-playing video game OHKO barrel stuffing difficulty assist guard CP anti-aliasing AAA theorycraft.
                </p>
                <p>
                  The Witcher accelerometer kill gamer gold sink Own kill screen auto battler. Dynamic game difficulty balancing pre-firing Metroid Prime easter eggs Call of Duty compulsion loop texture mapping publisher waggle The Legend of Zelda: Majora's Mask Super Smash Bros.. The Orange Box rng pre-rendered graphics open world aimbot GG no re frag Hacker GUI head bob Holy Trinity shoulder buttons.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.requirementSection}>
            <div className={styles.sectionContent}>
              <h2>System Requirements</h2>

              <div className={styles.requirementContainer}>
                <ul className={styles.requirementTable}>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}></div>
                    <div className={styles.column2}>Minimum</div>
                    <div className={styles.column3}>Recommended</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}></div>
                    <div className={styles.column2}>Requires a 64-bit processor and operating system</div>
                    <div className={styles.column3}>Requires a 64-bit processor and operating system</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}>Processor</div>
                    <div className={styles.column2}>Intel® Core™ i5-2500K or AMD FX-6300</div>
                    <div className={styles.column3}>Intel® Core™ i7-4770K or AMD Ryzen 5 1500X</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}>Graphic Card</div>
                    <div className={styles.column2}>Nvidia GeForce GTX 770 2GB or AMD Radeon R9 280 3GB</div>
                    <div className={styles.column3}>Nvidia GeForce GTX 1060 6GB or AMD Radeon RX 480 4GB</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}>Memory</div>
                    <div className={styles.column2}>4GB RAM</div>
                    <div className={styles.column3}>12GB RAM</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}>Storage</div>
                    <div className={styles.column2}>10GB</div>
                    <div className={styles.column3}>30GB</div>
                  </li>
                  <li className={styles.tableRow}>
                    <div className={styles.column1}>Operating System</div>
                    <div className={styles.column2}>Windows 10</div>
                    <div className={styles.column3}>Windows 10</div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <div className={styles.platform}>
            <h2>Available For Platform</h2>
            { values.drm_name === 'Steam' ?
              <Steam /> : ''
            }
          </div>
        </div>

        <div className={styles.return}>
          <Link href={'/'}>
            <p>Back</p>
          </Link>
        </div>
      </div>
    </Layout>
 )
};

export default Game;


export const getServerSideProps: GetServerSideProps<{ game: GameType }> = async(context) => {
  //? API documentation : https://developers.xsolla.com/api/igs-bb/operation/get-game-by-sku/

  const { id } = context.query;
  const query = new URLSearchParams({
    locale: 'en',
  }).toString();

  const res = await fetch(`https://store.xsolla.com/api/v2/project/36867/items/game/sku/${id}?${query}`, {
    method: 'GET',
    headers: {
      'connection': 'keep-alive',
      'Content-Type': 'application/json'
    }
  });
  const game = await res.json();
  return {
    props: {
      game
    }
  }
}


import Link from 'next/link';

import type { GameType } from '@/src/types/models';

import styles from './Games.module.css'

interface Props {
  id: string
  name: string
  image: string
  genre: string
  price: string
  canBeBought: boolean
  description: string | null
  drmName: string
  unitType: string
  type: string
}

const Game = ({ id, name, image, price, canBeBought, description, drmName, unitType, type }: Props) => {
  return (
    <div className={styles.container}>
       <div>
          <Link href={'/game/[id]'} as={`game/${id}`}>
            <div>
              <div className={styles.product}>
                <div className={styles.imgContainer}>
                  <img src={image} alt={name} />
                </div>
                <div className={styles.nameContainer}>
                  <h3>{name}</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <p>Available now on {drmName} !</p>
                  <p>
                    { description ?
                      description :
                      `${name} is a ${unitType}, sell in ${type}. The price of this game is RM${price}, it is sold on ${drmName}. Avai }`
                    }
                  </p>
                </div>
                <div className={styles.label}>
                  <div className={canBeBought ? styles.priceActive : styles.priceInactive}>RM {price}</div>
                  <div className={styles.detail}>&rarr;</div>
                </div>
              </div>
            </div>
          </Link>
       </div>
    </div>
  )
};

export default Game

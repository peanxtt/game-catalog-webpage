import Link from 'next/link';

import styles from './Game.module.css'

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
      <Link href={'/game/[id]'} as={`game/${id.toLowerCase()}`}>
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
                `${name} is a uncompromising ${unitType}, full of fun and unique things that never before seen!
                Enter a unexplored world full of dangers and surprises. Play your way as you unravel the mysteries of this game.`
              }
            </p>
          </div>
          <div className={styles.label}>
            <div className={canBeBought ? styles.priceActive : styles.priceInactive}>RM {price}</div>
            <div className={styles.detail}>&rarr;</div>
          </div>
        </div>
      </Link>
    </div>
  )
};

export default Game

import styles from './Games.module.css'
import Link from 'next/link';

interface Props {
  id: string,
  name: string,
  image: string,
  genre: string,
  price: string
  description: string | null
}

const Game = ({ id, name, image, genre, price, description }: Props) => {
  return (
    <div className={styles.container}>
       <div>
          <Link href='/game/[id]' as={`game/${id}`}>
            <div>
              <div className={styles.product}>
                <div className={styles.imgContainer}>
                  <img src={image} alt={name} />
                </div>
                <div className={styles.nameContainer}>
                  <h3>{name}</h3>
                  <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.label}>
                  <div className={styles.price}>RM {price}</div>
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

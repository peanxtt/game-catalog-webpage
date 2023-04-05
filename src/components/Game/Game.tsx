import styles from './Games.module.css'
import Link from 'next/link';

interface Props {
  id: number,
  name: string,
  image: string,
  genre: string,
  description: string | null
}

const Game = ({ id, name, image, genre, description }: Props) => {
  return (
    <div className={styles.container}>
       <div>
          <Link href='/game/[id]' as={`game/${id}`} legacyBehavior>
            <a>
              <div>
                <div>
                  <img src={image} alt={name} />
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                  <span>{genre}</span>
              </div>
            </a>
          </Link>
       </div>
    </div>
  )
};

export default Game

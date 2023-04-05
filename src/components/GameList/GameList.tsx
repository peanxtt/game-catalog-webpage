
import Game from "../Game/Game";

import type { GameType } from "@/src/types/models";

import styles from './GameList.module.css'

interface Props {
  filteredGames: GameType[]
}

const GameList = ({ filteredGames }: Props ) => {
  return (
    <>
      {filteredGames.map((game) => {
        return (
          <div key={game.item_id} className={styles.container}>
            <Game
              id={game.item_id}
              name={game.name}
              image={game.image_url}
              genre={game.type}
              description={game.description}
            />
          </div>
        )
      })}
    </>
  )
};

export default GameList
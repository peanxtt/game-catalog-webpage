import { useState } from "react";

import Pagination from "../Pagination";
import Game from "../Game/Game";
import { paginate } from "@/src/helper";

import type { GameType } from "@/src/types/models";

import styles from './GameList.module.css'

interface Props {
  filteredGames: GameType[]
}

const GameList = ({ filteredGames }: Props ) => {
  const [convertionRate, setConvertionRate] = useState(4.40);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const onPageChange = (page: any) => {
    setCurrentPage(page);
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paginatedGames = paginate(filteredGames, currentPage, pageSize);

  return (
    <>
      <div className={styles.itemContainer}>
        {paginatedGames.map((game) => {
          return (
            <div key={game.item_id}>
              <Game
                id={game.sku}
                name={game.name}
                image={game.image_url}
                price={
                  game.unit_items[0].price.currency === 'USD' ?
                  (parseInt(game.unit_items[0].price.amount)*convertionRate).toFixed(2) :
                  (parseInt(game.unit_items[0].price.amount)).toFixed(2)
                }
                genre={game.type}
                description={game.description}
              />
            </div>
          )
        })}
      </div>
      <Pagination
        items={filteredGames.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </>
  )
};

export default GameList
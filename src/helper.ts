import type { GameType } from "./types/models";

export const paginate = (items: GameType[] , pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
 };
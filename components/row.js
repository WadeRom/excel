import { TableTr, TableTh } from "./base.js";

export const Row = (row, cells) => {
  const cell = TableTh({ children: [row + 1] });
  return TableTr({
    attrs: { id: row },
    children: [cell, ...cells],
  });
};
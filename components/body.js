import { Row } from "./row.js";
import { times } from "../utilities/iterators.js";
import { Cell } from "./cell.js"; 

/*
* This is the base component contains all rows and cells for the table
* @param {number} = rows,
* @param {number} = cols,
*/

export const Body = (rows, cols) => {
  if (!rows || !cols) return;
  return times(rows).map((row) => {
    const cells = times(cols).map((col) => Cell(row, col));
    return Row(row, cells);
  });
};

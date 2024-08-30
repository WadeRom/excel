import { times } from "../utilities/iterators.js";
import { chartCode } from "../utilities/utilities.js";
import { Span, TableTr, TableTd, TableTh } from "./base.js";


/*
* This is base component that contains all cells of header of table
* @param {number} = cols
*/

export const Header = (cols) => {
  const Cells = times(cols).map((col) =>
    TableTd({
      children: [Span({ children: [chartCode(col)] })],
    })
  );
  
  const Row = TableTr({
    children: [TableTh(), ...Cells],
  });

  return Row;
};
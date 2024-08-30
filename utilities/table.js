
import { Calc } from "./positions.js";
import { $table, $ } from "../constants.js";

// Utilities
export const tableUtilities = (tableId) => {
  const table = $(tableId) || $table;
  const tbody = table.tBodies[0];

  const defaultGrid = {
    rows: table.rows.length - 1,
    cols: table.rows[0].cells.length - 1,
  };

  const calcPositions = (row, col, grid = defaultGrid, delta = 1) => ({
    row: Calc(grid.rows, row, delta),
    col: Calc(grid.cols, col, delta),
  });

  const getCell = (row, col) => {
    const cell = tbody.rows[row]?.cells[col + 1]; // +1 because cells are indexed from 0 in HTML table.
    if (!cell) {
      console.log("Not found");
      return null;
    }
    return { childrens: cell.children };
  };

  const calcDisplacement = (action, row, col) => {
    if (!action) return null;

    const { row: newRow, col: newCol } = calcPositions(row, col);
    const actions = {
      Enter: [newRow.next, newCol.current],
      ArrowUp: [newRow.prev, newCol.current],
      ArrowDown: [newRow.next, newCol.current],
      ArrowLeft: [newRow.current, newCol.prev],
      ArrowRight: [newRow.current, newCol.next],
    };

    return actions[action] || null;
  };

  return {
    getCell,
    calcPositions,
    calcDisplacement,
  };
};
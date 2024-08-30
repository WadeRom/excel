import { tableUtilities } from "./table.js";
import { setAttributes, setChildrens, setEvents } from "../events.js";

export const createIdGenerator = () => {
  let idCounter = 0;
  return () => `node-${idCounter++}`;
};

export const generateUniqueId = createIdGenerator();

export const deepEqualUsingJSON = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const chartCode = (chartNumber) => {
  let headerString = "";
  const DEFAULT_CHART = 65;

  while (chartNumber >= 0) {
    headerString =
      String.fromCharCode((chartNumber % 26) + DEFAULT_CHART) + headerString;
    chartNumber = Math.floor(chartNumber / 26) - 1;
  }

  return headerString;
};

export const nextCellFocus = (row, col, action) => {
  const { getCell, calcDisplacement } = tableUtilities();
  const [moveRow, moveCol] = calcDisplacement(action, row, col);
  const { childrens } = getCell(moveRow, moveCol);

  return childrens.namedItem(`input_${moveCol + moveRow}${moveCol}`).focus();
};

export const createElementHTML = (
  tag,
  attrs = {},
  children = [],
  events = {}
) => {
  const node = document.createElement(tag || "div");
  setAttributes(node, attrs);
  setChildrens(node, children);
  setEvents(node, events);

  return node;
};

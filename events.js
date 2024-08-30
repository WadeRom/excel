import { keyDownList  as whiteList } from "./constants.js";
import { nextCellFocus } from "./utilities/utilities.js";
import { iterateObject, isArrayEmpty } from "./utilities/iterators.js";

export const appendChild = (child, node) => node.append(child);

export const addAttribute = (key, value, node) => node.setAttribute(key, value);

export const addEvent = (name, callback, node, options = { once: false }) =>
  node.addEventListener(name, callback, options);

export const setEvents = (node, events = {}) =>
  iterateObject(events, (key, value) => addEvent(key, value, node));

export const setAttributes = (node, attrs = {}) =>
  iterateObject(attrs, (key, value) => addAttribute(key, value, node));

export const setChildrens = (node, childrens = []) => {
  return isArrayEmpty(childrens)
    ? childrens.forEach((child) => appendChild(child, node))
    : node;
};

export const handleKeydown = (e, row, col) => {
  if (whiteList.includes(e.key)) {  
    nextCellFocus(Number(row), Number(col), e.key);
  }
  return;
};

export const handleBlur = (event) => {
  const { x, y } = event.target.dataset;
};

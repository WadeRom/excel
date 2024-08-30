import { createElement, nodeStructure } from "../components/reactive.js";

// Actualizar el contenido del nodo
export const updateNodeContent = (node, newState) => {
  console.log(node, newState);
  
  if (typeof newState === 'string' || typeof newState === 'number') {
    node.attrs.textContent = newState;
    if (node.element) {
      node.element.textContent = newState;
    }
  } else if (node.attrs.hasOwnProperty('innerHTML')) {
    node.attrs.innerHTML = newState;
    if (node.element) {
      node.element.innerHTML = newState;
    }
  }
};


export const test = () => {
  const node = createElement();
  console.log(node);
  
}
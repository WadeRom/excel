import { setAttributes, setEvents } from '../events.js';
import { generateUniqueId } from '../utilities/utilities.js';

// Crear un nodo
export const nodeStructure = (tag = 'div', attrs = {}, events = {}, children = [], update = null) => {
  return {
    tag,
    attrs,
    events,
    children,
    parent: null,
    element: null,
    update,
  };
};

// Agregar un hijo a un nodo
export const appendChild = (parentNode, childNode) => {
  const updatedChild = { ...childNode, parent: parentNode };
  const updatedParent = { ...parentNode, children: [...parentNode.children, updatedChild] };

  return updatedParent;
};

// Crear el elemento HTML de un nodo
export const createElement = (node = nodeStructure) => {
  const element = document.createElement(node.tag);
  
  setEvents(element, node.events);
  setAttributes(element, node.attributes)
  
  node.children.forEach(child => {
    const childElement = createElement(child);
    element.appendChild(childElement);
  });
  
  node.element = element;

  return element;
};

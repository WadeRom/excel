import { createElementHTML } from "../utilities/utilities.js";

/*
  @props = {attr, children, events}
  @attrs = {} contains attributes for the element represented in html, 
  @children = [] contains children for the element represented in html
  @events = {} contains events for the element represented in html
*/

// Base components
export const Span = (props = {}) =>
  createElementHTML("span", props.attrs, props.children, props.events);

export const Input = (props = {}) =>
  createElementHTML("input", props.attrs, props.children, props.events);

export const TableTr = (props = {}) =>
  createElementHTML("tr", props.attrs, props.children, props.events);

export const TableTh = (props = {}) =>
  createElementHTML("th", props.attrs, props.children, props.events);

export const TableTd = (props = {}) =>
  createElementHTML("td", props.attrs, props.children, props.events);
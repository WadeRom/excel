import { useState } from "../observer.js";
import { handleKeydown } from "../events.js";
import { Span, Input, TableTd } from "./base.js";
import { useHandlerKeydown } from "../state/useKeydown.js";

/*
* This is the base component for all cells in the table
* @param {number} = row,
* @param {number} = row,
*/


export const Cell = (row, col) => { 

  const [state, setState] = useState({
    value: "",
    computedValue: "",
  });

  const SpanCell = Span({
    attrs: { id: `span_${row+row}${col+row}` },
    children: [`${state().computedValue}`],
  });

  const InputCell = Input({
    attrs: { type: "text", id: `input_${col+row}${col}` },
    events: { keyup: (e) => setState((prevState) => ({
      ...prevState,
      value: e.target.value,
      computedValue: `Computed: ${e.target.value}`
    }))},
  });

  const ContainerCell = TableTd({
    attrs: { "data-row": row, "data-col": col },
    children: [SpanCell, InputCell],
  });

  return ContainerCell;
};

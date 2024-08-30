import { handleKeydown } from "../events.js";

export const useHandlerKeydown = (event, row, col, setState) => {
  handleKeydown(event, row, col);
  
  setState({
    computedValue: event.target.value,
    value: event.target.value,
  });

  return;
};

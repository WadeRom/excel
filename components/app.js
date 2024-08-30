import { Body } from "./body.js";
import { Header } from "./header.js";
import { useState } from "../observer.js";
import { $, $body, $head } from "../constants.js";
export const App = () => {
  const [grid, setGrid] = useState({
    COLS: 24,
    ROWS: 20,
  });

  const ContainerHeader = Header(grid().COLS);
  const ContainerBody = Body(grid().ROWS, grid().COLS);

  $head.append(ContainerHeader);
  $body.append(...ContainerBody);
  
};
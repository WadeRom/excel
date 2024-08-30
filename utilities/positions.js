export const Calc = (max, position, delta) => {
  return {
    current: position,
    next: (position + delta) % max,
    prev: (position - delta + max) % max,
  };
};
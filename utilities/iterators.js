export const times = (length) => Array.from({ length }, (_, i) => i);
export const isArrayEmpty = (array) => (Array.isArray(array) && array.length > 0);
export const isObjectEmpty = (obj) => (Object.keys(obj).length === 0 && obj.constructor === Object);
export const iterateObject = (object, callback) => {
  if (isObjectEmpty(object) === false) {
    Object.entries(object).forEach(([key, value]) => {
      callback(key, value);
    });
  }
  return;
};

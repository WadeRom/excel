export const createState = (initialState) => {
  let state = initialState;

  const getState = () => state;

  const setState = (newState) => {
    if (typeof newState === 'function') {
      state = newState(state);
    } else {
      state = newState;
    }
    notify(state);
  };

  let subscribers = [];

  const subscribe = (callback) => {
    subscribers.push(callback);
  };

  const unsubscribe = (callback) => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  };

  const notify = (data) => {
    subscribers.forEach((subscriber) => subscriber(data));
  };

  return {
    getState,
    setState,
    subscribe,
    unsubscribe,
  };
};

export const useState = (initialState) => {
  const STATE_MANAGER = createState(initialState);
  
  let state = initialState;

  const subscriber = (newState) => {
    state = newState;
  };
  
  STATE_MANAGER.subscribe(subscriber);

  return [() => state, STATE_MANAGER.setState];
};

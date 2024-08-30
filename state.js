// Mapa de dependencias del estado
const stateDependenciesMap = new Map();

// Registrar dependencias en el mapa de dependencias
export const registerDependency = (stateKey, componentNode) => {
  if (!stateDependenciesMap.has(stateKey)) {
    stateDependenciesMap.set(stateKey, new Set());
  }
  stateDependenciesMap.get(stateKey).add(componentNode);
};

// Eliminar dependencias del mapa de dependencias
export const unregisterDependency = (stateKey, componentNode) => {
  if (stateDependenciesMap.has(stateKey)) {
    stateDependenciesMap.get(stateKey).delete(componentNode);
    if (stateDependenciesMap.get(stateKey).size === 0) {
      stateDependenciesMap.delete(stateKey);
    }
  }
};

// Crear estado y suscripciones
export const createState = (initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const setState = (newState) => {
    const prevState = { ...state };
    state = typeof newState === 'function' ? newState(state) : newState;

    Object.keys(state).forEach((key) => {
      if (prevState[key] !== state[key]) {
        if (stateDependenciesMap.has(key)) {
          stateDependenciesMap.get(key).forEach((componentNode) => {
            componentNode.updater(componentNode, state[key]);
          });
        }
      }
    });

    listeners.forEach(listener => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return [getState, setState, subscribe];
};

// useState personalizado
export const useState = (initialValue) => {
  const [getState, setState, subscribe] = createState(initialValue);

  const updateComponent = (componentNode, stateKey) => {
    subscribe((newState) => {
      if (componentNode.element && componentNode.updater) {
        componentNode.updater(componentNode, newState[stateKey]);
      }
    });
    registerDependency(stateKey, componentNode);
  };

  return [getState, setState, updateComponent];
};

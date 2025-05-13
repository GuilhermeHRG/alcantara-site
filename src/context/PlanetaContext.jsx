import { createContext, useState, useContext } from 'react';

const PlanetaContext = createContext();

export const PlanetaProvider = ({ children }) => {
  const [selecionado, setSelecionado] = useState(null);
  return (
    <PlanetaContext.Provider value={{ selecionado, setSelecionado }}>
      {children}
    </PlanetaContext.Provider>
  );
};

export const usePlaneta = () => useContext(PlanetaContext);

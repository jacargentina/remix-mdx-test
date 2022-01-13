import { createContext, useContext } from "react";

const AppContext = createContext<any>(undefined);

export const AppProvider = (props: { children: any }) => {
  return (
    <AppContext.Provider
      value={{
        test: "Expected value"
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (ctx === undefined) {
    throw new Error("Ddbe usarse dentro de un AppProvider");
  }
  return ctx;
};

export default AppContext;

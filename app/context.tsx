import { createContext } from "react";

const AppContext = createContext({
  test: "default value"
});

export const AppContextWrapper = (props: { children: any }) => {
  return (
    <AppContext.Provider
      value={{
        test: "Expected value"
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;

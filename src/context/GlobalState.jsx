import React from "react";
const GlobalContext = React.createContext();
export const GlobalState = ({ children }) => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ top: open });
  };
  return (
    <GlobalContext.Provider value={{ toggleDrawer, state }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};

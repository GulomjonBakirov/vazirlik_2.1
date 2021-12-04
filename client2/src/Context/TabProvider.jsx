import React, { createContext, useState, useContext } from "react";

const Context = createContext();
export default function TabProvider({ children }) {
  const [value, setValue] = useState(0);

  return (
    <Context.Provider value={{ value, setValue }}>
      <Context.Consumer>{() => children}</Context.Consumer>
    </Context.Provider>
  );
}

const useTab = (setterOnly) => {
  const { value, setValue } = useContext(Context);
  return setterOnly ? [setValue] : [value, setValue];
};

export { useTab };

import React, { createContext } from "react";

export interface contextLogin {
  isLogin: boolean;
}

const isLogginProvider = createContext({});
const isLogginConsumer = createContext({});

const isLoginContextProvider: React.FC<contextLogin> = props => {
  return (
    <isLogginProvider.Provider value={props.isLogin}>
      {props.children}
    </isLogginProvider.Provider>
  );
};

export default isLoginContextProvider;

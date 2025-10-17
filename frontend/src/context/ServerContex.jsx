import React from "react";
import { createContext } from "react";

export const serverDataContext = createContext();
const serverContex = ({ children }) => {
  const serverUrl = "http://localhost:3000";
  // const serverUrl = "https://creditsea-assignment-backend.onrender.com";
  const value = { serverUrl };
  return (
    <div>
      <serverDataContext.Provider value={value}>
        {children}
      </serverDataContext.Provider>
    </div>
  );
};

export default serverContex;

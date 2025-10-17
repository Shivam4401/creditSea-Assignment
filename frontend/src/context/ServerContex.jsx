import React from "react";
import { createContext } from "react";

export const serverDataContext = createContext();
const serverContex = ({ children }) => {
<<<<<<< HEAD
  const serverUrl = "http://localhost:3000";
  // const serverUrl = "https://creditsea-assignment-backend.onrender.com";
=======
  const serverUrl = "https://creditsea-assignment-backend.onrender.com";
>>>>>>> 6858a2210aa2bd0b51c6166308c9219f3aeed0a1
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

import React, { createContext, useState} from 'react';
import auth from "@react-native-firebase/auth";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  //-----------------body-------------------//
  const [user,setUser]=useState(auth().currentUser)
  return (
    <UserContext.Provider
      value={{
        //
        user
      }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
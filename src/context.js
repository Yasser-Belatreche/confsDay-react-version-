import React, {useContext, useState } from 'react'



const AppContext = React.createContext();

const AppProvider = ({children}) => {



  return (
    <AppContext.Provider value='Hii'>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


export { AppProvider,AppContext};

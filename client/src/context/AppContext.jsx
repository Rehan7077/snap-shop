import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const showError = (msg) => setError(msg);
    const hideError = () => setError(null)



    return (
        <AppContext.Provider value={{
            error,
            hideError,
            showError
        }}>
            {children}
        </AppContext.Provider>)
}
export const useApp = () => useContext(AppContext)
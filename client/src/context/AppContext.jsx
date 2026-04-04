import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);
    const showError = (msg) => setError(msg);
    const hideError = () => setError(null)



    return (
        <AppContext.Provider value={{
            loading,
            error,
            showLoader,
            hideLoader,
            hideError,
            showError
        }}>
            {children}
        </AppContext.Provider>)
}
export const useApp = () => useContext(AppContext)
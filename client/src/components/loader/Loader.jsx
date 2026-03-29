import { useApp } from '../../context/AppContext'
import './Loader.css'

export const Loader = () => {
    const { loading } = useApp()

    if(!loading) return null  

    return (
        <div className="loader-overlay">
            <div className="spinner"></div>
        </div>
    )
}
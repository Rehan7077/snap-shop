import { useApp } from "../../context/AppContext"

export const Error = () => {
    const { error } = useApp();

    if (!error) return;
return(
    <div>
        <h1>{error}</h1>
    </div>
)

}
import style from "./style.module.scss";
import type { Dispatch, SetStateAction } from "preact/compat";

const DestinationsTab = ({destination, setDestination}: {destination: string, setDestination: Dispatch<SetStateAction<string>>}) => {
    
    // Could be refactored for large/dynamic data
    return (
        <ul class={style.destinationsTab}>
            <li 
                class={`text-preset-8 ${destination === "Moon" ? style.active : ""}`}
                onClick={() => setDestination("Moon")}
            >
                MOON
            </li>
            <li 
                class={`text-preset-8 ${destination === "Mars" ? style.active : ""}`}
                onClick={() => setDestination("Mars")}
            >
                MARS
            </li>
            <li 
                class={`text-preset-8 ${destination === "Europa" ? style.active : ""}`}
                onClick={() => setDestination("Europa")}
            >
                EUROPA
            </li>
            <li 
                class={`text-preset-8 ${destination === "Titan" ? style.active : ""}`}
                onClick={() => setDestination("Titan")}
            >
                TITAN
            </li>
        </ul>
    )
};

export default DestinationsTab;
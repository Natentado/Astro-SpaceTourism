import type { Dispatch, SetStateAction } from "preact/compat";
import style from "./style.module.scss";

const DestinationsTab = ({destination, setDestination}: {destination: string, setDestination: Dispatch<SetStateAction<string>>}) => {
    
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
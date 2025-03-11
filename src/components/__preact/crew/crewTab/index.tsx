import type { Dispatch, SetStateAction } from "preact/compat";
import style from "./style.module.scss";

const CrewTab = ({crew, setCrew}: {crew: string, setCrew: Dispatch<SetStateAction<string>>}) => {
    
    // Could be refactored for large/dynamic data
    return (
        <ul class={style.crewsTab}>
            <li 
                class={crew === "Douglas Hurley" ? style.active : ""}
                onClick={() => setCrew("Douglas Hurley")}
            />
            <li 
                class={crew === "Mark Shuttleworth" ? style.active : ""}
                onClick={() => setCrew("Mark Shuttleworth")}
            />
            <li 
                class={crew === "Victor Glover" ? style.active : ""}
                onClick={() => setCrew("Victor Glover")}
            />
            <li 
                class={crew === "Anousheh Ansari" ? style.active : ""}
                onClick={() => setCrew("Anousheh Ansari")}
            />
        </ul>
    )
};

export default CrewTab;
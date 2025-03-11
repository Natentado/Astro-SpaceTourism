import style from "./style.module.scss";
import type { Dispatch, SetStateAction } from "preact/compat";

const TechnologyTab = ({technology, setTechnology}: {technology: string, setTechnology: Dispatch<SetStateAction<string>>}) => {
    
    // Could be refactored for large/dynamic data
    return (
        <ul class={style.technologyTab}>
            <li 
                class={technology === "Launch vehicle" ? style.active : ""}
                onClick={() => setTechnology("Launch vehicle")}
            >
                <button class="text-preset-4">
                    1
                </button>
            </li>
            <li 
                class={technology === "Spaceport" ? style.active : ""}
                onClick={() => setTechnology("Spaceport")}
            >
                <button class="text-preset-4">
                    2
                </button>
            </li>
            <li 
                class={technology === "Space capsule" ? style.active : ""}
                onClick={() => setTechnology("Space capsule")}
            >
                <button class="text-preset-4">
                    3
                </button>
            </li>
        </ul>
    )
};

export default TechnologyTab;
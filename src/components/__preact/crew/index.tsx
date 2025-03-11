import CrewTab from "./crewTab";
import style from "./style.module.scss";
import { useState } from "preact/hooks";

type CrewObj = {
    name: string,
    images: {
      png: string,
      webp: string,
    },
    role: string,
    bio: string,
  };

interface ICrewPresentation {
    data: Array<CrewObj>
}

const CrewPresentation = ({data}: ICrewPresentation) => {
    const [ selectedCrew, setSelectedCrew ] = useState("Douglas Hurley");
    
    const crewItem = data.find(item => item.name === selectedCrew);
    const crewImgUrl = `/${crewItem?.images.webp.replace("./assets/", "")}`;
    
    return (
        <>
            <div class={style.crewInfos}>
                <div>
                    <p class="text-preset-3">
                        <span class="text-preset-4">
                            {crewItem?.role.toUpperCase()}
                        </span>
                        {crewItem?.name.toUpperCase()}
                    </p>

                    <p class="text-preset-9">
                        {crewItem?.bio}
                    </p>
                </div>
                <CrewTab crew={selectedCrew} setCrew={setSelectedCrew} />
            </div>
            <picture class={style.crewImgContainer}>
                <img 
                    src={crewImgUrl}
                    alt={`Image of crew integrant: ${selectedCrew}`}
                    fetchPriority="high"
                />
            </picture>
        </>
    )
};

export default CrewPresentation;
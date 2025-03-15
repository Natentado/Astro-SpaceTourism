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
                    <div>
                        <span key={`${selectedCrew}-role`} class="text-preset-4 fade">
                            {crewItem?.role.toUpperCase()}
                        </span>
                        <p key={`${selectedCrew}-name`} class="text-preset-3 fade">
                            {crewItem?.name.toUpperCase()}
                        </p>
                    </div>

                    <p key={`${selectedCrew}-bio`} class="text-preset-9 fade">
                        {crewItem?.bio}
                    </p>
                </div>
                <CrewTab crew={selectedCrew} setCrew={setSelectedCrew} />
            </div>
            <picture key={`${selectedCrew}-img`} class={`${style.crewImgContainer} fade`}>
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
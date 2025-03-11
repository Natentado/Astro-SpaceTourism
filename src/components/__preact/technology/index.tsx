import { useState } from "preact/hooks";
import style from "./styule.module.scss";
import TechnologyTab from "./destinationsTab";

type TechnologyObj ={
    name: string,
    images: {
        portrait: string,
        landscape: string,
    },
    description: string,
};

interface ITechnologyGallery {
    data: Array<TechnologyObj>
}

const TechnologySlides = ({data}: ITechnologyGallery) => {
    const [ technology, setTechnology ] = useState("Launch vehicle");
    
    const technologyItem = data.find(item => item.name === technology);
    const technologyImgUrl = `/${technologyItem?.images.portrait.replace("./assets/", "")}`;

    return (
        <div className={style.technologySlides}>

            <picture>
                <source
                    media="(min-width: 1024px)"
                    srcset={technologyImgUrl}
                />
                <img
                    src={technologyImgUrl}
                    alt="Technology"
                    loading="eager"
                    fetchpriority="high"
                />
            </picture>

            <div>
                <TechnologyTab 
                    technology={technology} 
                    setTechnology={setTechnology}
                />

                <div>
                    <p class="text-preset-3">
                        <span class="text-preset-4">
                            THE TERMINOLOGY…
                        </span>
                        {technologyItem?.name.toUpperCase()}
                    </p>
                    <p class="text-preset-9">{technologyItem?.description}</p>
                </div>
            </div>
		</div>
    )
};

export default TechnologySlides;
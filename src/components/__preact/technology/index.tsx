import { useState } from "preact/hooks";
import style from "./style.module.scss";
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
            <picture key={`${technology}-img`}>
                <source
                    media="(min-width: 1024px)"
                    srcset={technologyImgUrl}
                />
                <img
                    src={technologyImgUrl}
                    alt="Technology"
                    loading="eager"
                    fetchpriority="high"
                    class="fade"
                />
            </picture>

            <div>
                <TechnologyTab 
                    technology={technology} 
                    setTechnology={setTechnology}
                />

                <div>
                    <div>
                        <span class="text-preset-4">
                            THE TERMINOLOGY…
                        </span>
                        <p key={`${technology}-name`} class="text-preset-3 fade">
                            {technologyItem?.name.toUpperCase()}
                        </p>
                    </div>
                    <p key={`${technology}-description`} class="text-preset-9 fade">
                        {technologyItem?.description}
                    </p>
                </div>
            </div>
		</div>
    )
};

export default TechnologySlides;
import { useState } from "preact/hooks";
import style from "./style.module.scss";
import DestinationsTab from "./destinationsTab";

type DestinationObj ={
    name: string,
    images: {
      png: string,
      webp: string,
    },
    description: string,
    distance: string,
    travel: string,
};

interface IDestinationsGallery {
    data: Array<DestinationObj>
}

const DestinationsGallery = ({data}: IDestinationsGallery) => {
    const [ destination, setDestination ] = useState("Moon");

    const destinationItem = data.find(item => item.name === destination);
    const destinationImgUrl = `/${destinationItem?.images.webp.replace("./assets/", "")}`;

    return (
        <section class={style.destinationsGallery}>
            <picture key={`${destination}-img`} class={`fade ${style.destinationImgContainer}`}>
                <img 
                    src={destinationImgUrl}
                    alt={destination}
                    fetchPriority="high"
                />
            </picture>

            <div class={style.destinationInfos}>
                <DestinationsTab destination={destination} setDestination={setDestination} />

                <div class={style.destinationContent}>
                    <h2 key={`${destination}-name`} class="text-preset-2 fade">
                        {destinationItem?.name.toUpperCase()}
                    </h2>
                    <p key={`${destination}-description`} class="text-preset-9 fade">
                        {destinationItem?.description}
                    </p>
                </div>

                <hr />

                <div class={style.quantitativeInfos}>
                    <span class="text-preset-7">
                        AVG. DISTANCE
                        <p key={`${destination}-distance`} class="text-preset-6 fade">
                            {destinationItem?.distance.toUpperCase()}
                        </p>
                    </span>

                    <span class="text-preset-7">
                        EST. TRAVEL TIME
                        <p key={`${destination}-travel`} class="text-preset-6 fade">
                            {destinationItem?.travel.toUpperCase()}
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
};

export default DestinationsGallery;
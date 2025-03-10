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
            <picture class={style.destinationImgContainer}>
                <img 
                    src={destinationImgUrl}
                    alt={destination}
                />
            </picture>

            <div class={style.destinationInfos}>
                <DestinationsTab destination={destination} setDestination={setDestination} />

                <div class={style.destinationContent}>
                    <h2 class="text-preset-2">
                        {destinationItem?.name.toUpperCase()}
                    </h2>
                    <p class="text-preset-9">
                        {destinationItem?.description}
                    </p>
                </div>

                <hr />

                <div class={style.quantitativeInfos}>
                    <span class="text-preset-7">
                        AVG. DISTANCE
                        <p class="text-preset-6">
                            {destinationItem?.distance.toUpperCase()}
                        </p>
                    </span>

                    <span class="text-preset-7">
                        EST. TRAVEL TIME
                        <p class="text-preset-6">
                            {destinationItem?.travel.toUpperCase()}
                        </p>
                    </span>
                </div>
            </div>
        </section>
    )
};

export default DestinationsGallery;
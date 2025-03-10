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
                <DestinationsTab />

                <div class={style.destinationContent}>
                    <h2>{destinationItem?.name}</h2>
                    <p>{destinationItem?.description}</p>
                </div>

                <hr />

                <div class={style.quantitativeInfos}>
                    <span>
                        AVG. DISTANCE
                        <p>{destinationItem?.distance}</p>
                    </span>

                    <span>
                        Est. travel time
                        <p>{destinationItem?.travel}</p>
                    </span>
                </div>
            </div>
        </section>
    )
};

export default DestinationsGallery;
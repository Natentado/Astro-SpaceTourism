import style from "./style.module.scss";

const DestinationsTab = () => {
    
    return (
        <ul class={style.destinationsTab}>
            <li class={"text-preset-8"}>MOON</li>
            <li class={"text-preset-8"}>MARS</li>
            <li class={"text-preset-8"}>EUROPA</li>
            <li class={"text-preset-8"}>TITAN</li>
        </ul>
    )
};

export default DestinationsTab;
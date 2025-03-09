import style from "./style.module.scss";

const DestinationsTab = () => {
    
    return (
        <ul class={style.destinationsTab}>
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
        </ul>
    )
};

export default DestinationsTab;
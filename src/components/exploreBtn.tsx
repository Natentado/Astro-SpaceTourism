import style from "./style.module.scss";

const ExploreButton = () => {

    return (
        <a class={`text-preset-4 ${style.exploreBtn}`} href="/">
            EXPLORE
        </a>
    )
};

export default ExploreButton;
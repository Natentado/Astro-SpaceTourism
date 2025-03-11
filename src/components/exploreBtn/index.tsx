import style from "./style.module.scss";

const ExploreButton = () => {

    return (
        <a class={style.exploreBtn} href="/destination">
            <button class="text-preset-4 ">
                EXPLORE
            </button>
        </a>
    )
};

export default ExploreButton;
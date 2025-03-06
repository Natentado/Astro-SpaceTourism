import styles from "./style.module.scss";

interface IBackgroundIMG {
    variant: "home" | "destination" | "crew" | "technology";
};

const BackgroundIMG = ({variant}: IBackgroundIMG) => {

    return (
        <div 
            className={`${styles.bgImgContainer} ${styles[variant]}`}
        />
    )
};

export default BackgroundIMG
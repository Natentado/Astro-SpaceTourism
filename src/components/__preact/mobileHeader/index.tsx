import style from "./style.module.scss";
import OpenMenuImg from "@assets/shared/icon-hamburger.svg";
import CloseMenuImg from "@assets/shared/icon-close.svg";
import { useRef } from "preact/hooks";
import { memo } from "preact/compat";

interface IMobileHeader {
    pathname: string;
}

const MobileHeader = memo(({pathname}: IMobileHeader) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const handleOpenMenu = () => {
        modalRef?.current?.showModal();
    };

    const handleCloseMenu = () => {
        modalRef?.current?.close();
    };

    return (
        <>
            <button 
                class={style.mobileHeaderBtn}
                onClick={handleOpenMenu}
            >
                <img
                    src={OpenMenuImg.src}
                    alt="Open side menu"
                />
            </button>
            <dialog class={style.sideModal} ref={modalRef}>
                <header>
                    <button 
                        class={style.mobileHeaderBtn}
                        onClick={handleCloseMenu}
                    >
                        <img
                            src={CloseMenuImg.src}
                            alt="Close side menu"
                        />
                    </button>
                </header>

                <MobileNavigation pathname={pathname} />
            </dialog>
        </>
    )
});

export default MobileHeader;

const MobileNavigation = ({pathname}: IMobileHeader) => {

    return (
        <nav class={style.mobileNavigation}>
            <a 
                href="/" 
                class={`text-preset-8 ${pathname === "/" ? style.active : ""}`}
            >
                <b>00</b>
                HOME
            </a>
            <a 
                href="/destination/" 
                class={`text-preset-8 ${pathname === "/destination/" ? style.active : ""}`}
            >
                <b>01</b>
                DESTINATION
            </a>
            <a 
                href="/crew/" 
                class={`text-preset-8 ${pathname === "/crew/" ? style.active : ""}`}
            >
                <b>02</b>
                CREW
            </a>
            <a 
                href="/technology/" 
                class={`text-preset-8 ${pathname === "/technology/" ? style.active : ""}`}
            >
                <b>03</b>
                TECHNOLOGY
            </a>
        </nav>
    );
};
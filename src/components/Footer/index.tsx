import Logo from "../logo/Logo";
import style from "./style.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Logo />
           <p className={style.text}>© Created by Migelka_Sid, 2024</p>
        </footer>
    );
};

export default Footer;
import { Link } from "react-router-dom";
import logo_img from "..//..//images/logo.png";
import style from "./style.module.css";

const Logo  = () => {
    return (
        <Link to="/" className={style.logo}>
            <img src={logo_img} alt="logo" />
            <span>Jelly Belly</span>
        </Link>
    )
};

export default Logo;
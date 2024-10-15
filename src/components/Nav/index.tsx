import style from "./style.module.css";
import SwitchTheme from "../SwitchTheme";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={style.container}>
            <Link className={style.link} to="/beans">Beans</Link>
            <Link className={style.link} to="/facts">Facts</Link>
            <Link className={style.link} to="/recipes">Recipes</Link>
            <Link className={style.link} to="/combinations">Combinations</Link>
            <Link className={style.link} to="/history">History</Link>
            <SwitchTheme />
        </nav>
    );
};

export default Nav;


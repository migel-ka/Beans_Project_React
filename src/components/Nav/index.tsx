import style from "./style.module.css";
import SwitchTheme from "../SwitchTheme";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className={style.container}>
            <Link className={style.link} to="/MyProject/beans">Beans</Link>
            <Link className={style.link} to="/MyProject/facts">Facts</Link>
            <Link className={style.link} to="/MyProject/recipes">Recipes</Link>
            <Link className={style.link} to="/MyProject/combinations">Combinations</Link>
            <Link className={style.link} to="/MyProject/history">History</Link>
            <SwitchTheme />
        </nav>
    );
};

export default Nav;


import style from "./style.module.css";
import SwitchTheme from "../SwitchTheme";
import { Link } from "react-router-dom";
import { FC } from "react";

interface Props {
    handleMenu: () => void;
  }

const NavMobile: FC<Props> = ({ handleMenu }) => {
   

    return (
        <nav className={style.container}>
            <div className={style.menu}>
            <button onClick={handleMenu}>Close Menu</button>
                <Link className={style.link} to="/MyProject/beans">Beans</Link>
                <Link className={style.link} to="/MyProject/facts">Facts</Link>
                <Link className={style.link} to="/MyProject/recipes">Recipes</Link>
                <Link className={style.link} to="/MyProject/combinations">Combinations</Link>
                <Link className={style.link} to="/MyProject/history">History</Link>
                <SwitchTheme />
            </div>
        </nav>
    );
};

export default NavMobile;

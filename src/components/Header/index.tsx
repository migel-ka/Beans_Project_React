import { useState } from "react";
import Logo from "../logo/Logo";
import Nav from "../Nav/index";
import style from "./style.module.css";
import NavMobile from "../NavMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }
  
    return (
        <header className={style.container}>
            <Logo />
            <Nav />
            <button onClick={handleMenu}>
            <div className={style.burger} >
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
                <div className={style.burgerLine}></div>
            </div>
            </button>
            {menuOpen && <NavMobile handleMenu = {handleMenu}/>}
        </header>
    );
};

export default Header;
import { Outlet } from "react-router-dom";
import Header from "../Header"
import Footer from "../Footer";
import style from "./style.module.css";

const Layout = () => {
    return (
        <>
        <Header />
        <main className={style.mainSection}>
            <Outlet />
        </main>
        <Footer />
        </>
    );
};

export default Layout;
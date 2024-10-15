import style from "./style.module.css";
import { useEffect, useState } from "react";
import imgBean from "..//../images/happy-bean.png";
import { History } from "../type/history";
import Histor from "../Histor";
import { Loader } from "../Loader";
import NotFounde from "../NotFound";


const HistoryCards = () => {

    const [updateHistory, setUpdateHistory] = useState<History[]>([]);
    const [initialHistory, setInitialHistory] = useState<History[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=1&pageSize=100");
            const data = await req.json();
            setInitialHistory(data.items);
            setUpdateHistory(data.items); 
        } catch (e) {
            console.log("ERROR->", e);
            setIsError(true);
        } finally {
            setIsLoading(false); 
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={style.factGrit}>
            <img className={style.imgBean} src={imgBean} alt="" />
            {isLoading && <Loader />}
            {isError && <NotFounde />}
            {initialHistory.length > 0 && 
                updateHistory.map((histor) => ( <Histor data={histor} key={histor.mileStoneId} />
                ))
            }
        </div>
    );
};

export default HistoryCards;

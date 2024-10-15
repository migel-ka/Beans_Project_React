import style from "./style.module.css";
import { useEffect, useState } from "react";
import imgBean from "..//../images/happy-bean.png";
import { CombinationType } from "../type/combination";
import Combination from "../Combination";
import { Loader } from "../Loader";
import NotFounde from "../NotFound";


const CombinationsCards = () => {

    const [updateCombinations, setUpdateCombinations] = useState<CombinationType[]>([]);
    const [initialCombinations, setInitialCombinations] = useState<CombinationType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Combinations?pageIndex=1&pageSize=100");
            const data = await req.json();
            setInitialCombinations(data.items);
            setUpdateCombinations(data.items); 
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
            {initialCombinations.length > 0 && 
                updateCombinations.map((combination) => ( <Combination data={combination} key={combination.combinationId} />
                ))
            }
        </div>
    );
};

export default CombinationsCards;

import style from "./style.module.css";
import Card from "../Card/index";
import { useEffect, useState, FC } from "react";
import { typeBean } from "../type/bean";
import { Loader } from "../Loader";
import NotFounde from "../NotFound";

type Props = {
    filterValue : string;
}
const Cards: FC<Props> = ({ filterValue }) => {

    const [updateBeans, setUpdateBeans] = useState<typeBean[]>([]);
    const [initialBeans, setInitialBeans] = useState<typeBean[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100");
            const data = await req.json();
            setInitialBeans(data.items);
            setUpdateBeans(data.items); 
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

    useEffect(()=>{
        if(filterValue){
            const newArray = initialBeans?.filter((item)=>item.flavorName.includes(filterValue));
           newArray && setUpdateBeans (newArray);
        } else {
            setUpdateBeans(initialBeans)
        }
    }, [filterValue])
    return (
        <div className={style.container}>
            {isLoading && <Loader />}
            {isError && <NotFounde />}
            {initialBeans.length > 0 && 
                updateBeans.map((bean) => ( <Card data={bean} key={bean.beanId} />
                ))
            }
        </div>
    );
};

export default Cards;

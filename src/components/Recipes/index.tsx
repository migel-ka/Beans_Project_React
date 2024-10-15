import style from "./style.module.css";
import { useEffect, useState } from "react";
import imgBean from "..//../images/happy-bean.png";
import { RecipiesType } from "../type/recipies";
import Recipie from "../Recip";
import { Loader } from "../Loader";
import NotFounde from "../NotFound";

const RecipesCards = () => {

    const [updateRecipes, setUpdateRecipes] = useState<RecipiesType[]>([]);
    const [initialRecipes, setInitialRecipes] = useState<RecipiesType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch("https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=100");
            const data = await req.json();
            setInitialRecipes(data.items);
            setUpdateRecipes(data.items); 
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
            {initialRecipes.length > 0 && 
                updateRecipes.map((recip) => ( <Recipie data={recip} key={recip.recipeId} />
                ))
            }
        </div>
    );
};

export default RecipesCards;

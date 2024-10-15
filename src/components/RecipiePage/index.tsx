import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { RecipiesType } from "../type/recipies";

const RecipiePage = () => {

    const params = useParams();
    const [recipeData, setRecipeData] = useState< RecipiesType | null>(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
            const req = await fetch (`https://jellybellywikiapi.onrender.com/api/Recipes/${params.id}`
            );
            const data = await req.json();
            console.log (data);
            setRecipeData(data);
            } catch (e) {
                console.log ("Error->",e);
            }
        };

        getData();
    }, []);
    return (
        <>
        {recipeData && (
        <div className={style.recipeCard}>
            <h3>{recipeData.name}</h3>
            <br />
            <p>{recipeData.description}</p>
            <br />
            <p>Preparation time:{recipeData.prepTime}</p>
            <p>Cook time:{recipeData.cookTime}</p>
            <p>Total time:{recipeData.totalTime}</p>
            <p>Recipe makes {recipeData.makingAmount}</p>
            <div className={style.recipeCardimg}>
              <img src={recipeData.imageUrl} alt="" />
            </div>
            <b>Ingredients</b>
            <p>{recipeData.ingredients}</p>
            <br />
            <Link className={style.link} to={`/recipes` }> Back to recipes &rarr;</Link>
        </div>
        )};
        </>
    );
};

export default RecipiePage;
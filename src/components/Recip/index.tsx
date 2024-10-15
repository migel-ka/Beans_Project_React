import { FC } from "react";
import style from "./style.module.css";
import { RecipiesType } from "../type/recipies";
import { Link } from "react-router-dom";

type Props = {
   data: RecipiesType;
};

const Recipie : FC<Props> = ({data}) => {
    return (
        <div className={style.fact}>
            <div>
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <br />
              <p>Make:{data.makingAmount}</p>
              {data.totalTime.length > 0 && <p>Total Time: {data.totalTime}</p>}
              <br />
            </div>
            <div className={style.aLink}>
              <Link className={style.link} to={`/recipie/${data.recipeId}`}>check out this recipe &rarr;</Link>
            </div>  
        </div>
    );
};

export  default Recipie;
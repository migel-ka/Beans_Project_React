import { FC } from "react";
import { typeBean } from "..//type/bean";
import style from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
   data: typeBean;
};

const Card : FC<Props> = ({data}) => {
    return (
        <Link to={`/MyProject/bean/${data.beanId}`} className={style.card}>
            <div className={style.beanCard}>
              <h2>{data.flavorName}</h2>
              <img src={data.imageUrl} alt={data.flavorName} className={style.imgBean}/>
              <p>{data.description}</p>
            </div>
        </Link>
    );
};

export  default Card;


import { FC } from "react";
import style from "./style.module.css";
import { CombinationType } from "../type/combination";

type Props = {
   data: CombinationType;
};

const Combination : FC<Props> = ({data}) => {
    return (
        <div className={style.fact}>
            <h2>{data.name}</h2>
            <p>{data.tag}</p>
        </div>
    );
};

export  default Combination;
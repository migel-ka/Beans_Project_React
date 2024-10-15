import { FC } from "react";
import style from "./style.module.css";
import { FactType } from "../type/fact";

type Props = {
   data: FactType;
};

const Fact : FC<Props> = ({data}) => {
    return (
        <div className={style.fact}>
            <h2>{data.factId}.{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export  default Fact;
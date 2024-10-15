import { FC } from "react";
import style from "./style.module.css";
import { History } from "../type/history";

type Props = {
   data: History;
};

const Histor : FC<Props> = ({data}) => {
    return (
        <div className={style.history}>
            <div>
              <h2>{data.year}</h2>
              <p>{data.description}</p>
            </div>
            <p className={style.historyP}>&rarr;</p>
        </div>

    );
};

export  default Histor;
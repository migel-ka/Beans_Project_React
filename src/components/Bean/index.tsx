import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import imgSug from "..//../images/sugFREE.png";
import imgGlut from "..//../images/glutFREE.png";
import imgKosh from "..//../images/kosh.png";
import imgSes from "..//../images/season.png";
import { typeBean } from "../type/bean";

const Bean = () => {

    const params = useParams();
    const [beanData, setBeanData] = useState<typeBean | null>(null);
    
    useEffect(() => {
        const getData = async () => {
            try {
            const req = await fetch (`https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
            );
            const data = await req.json();
            setBeanData(data);
            } catch (e) {
                console.log ("Error->",e);
            }
        };

        getData();
    }, []);
    return (
        <>
        {beanData && (
        <div className={style.BeanCard}>
            <h3 className={style.beanH3}>{beanData.flavorName}</h3>
            <p className={style.beanP}>{beanData.description}</p>
            <div className={style.divImg}>
              <img className={style.imgBean} src={beanData.imageUrl} alt="" />
            </div>
            <p className={style.beanText}>Group Name:</p>
            <p className={style.beanText}>{beanData.groupName}</p>
            <br />
            <p className={style.beanText}>Ingredients:</p>
            <p className={style.beanText}>{beanData.ingredients}</p>
            <div className={style.icon}>
            {beanData.sugarFree === true && <img src={imgSug} alt="sugarFREE" />}
            {beanData.glutenFree === true && <img src={imgGlut} alt="glutenFree" />}
            {beanData.kosher === true && <img src={imgKosh} alt="Kosherno" />}
            {beanData.seasonal === true && <img src={imgSes} alt="sugarFREE" />}
            </div>
            <Link className={style.link} to={`/beans` }> Back to beans &rarr;</Link>
        </div>
        )}
        </>
    );
};

export default Bean;
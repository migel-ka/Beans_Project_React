import { useState } from "react";
import Cards from "../../Cards";
import Search from "../../Search";

const Beans = () => {
    const [filterValue, setFilterValue] = useState(""); 
    return (
        <>
         <Search setFilterValue={setFilterValue} /> 
         <Cards filterValue={filterValue} /> 
        </>
    );
};

export default Beans;
import { use, useState } from "react";
import AllCard from "./AllCard";
import type { Info } from "./type";

const MainPart = ({dataPromise}: {dataPromise:Promise<Info[]>}) => {
    const infos = use(dataPromise)
    const [stackAdd, setStackAdd]=useState([]);
    return (
        <div>
            <AllCard infos={infos} stackAdd={stackAdd}/>
            
        </div>
    );
};

export default MainPart;
import { use } from "react";
import AllCard from "./AllCard";
import type { Info } from "./type";

const MainPart = ({dataPromise}: {dataPromise:Promise<Info[]>}) => {
    const infos = use(dataPromise)
    // console.log(infos);
    return (
        <div>
            <AllCard infos={infos}/>
            
        </div>
    );
};

export default MainPart;
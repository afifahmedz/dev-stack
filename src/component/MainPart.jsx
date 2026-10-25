import { use, useState } from "react";
import AllCard from "./AllCard";


const MainPart = ({dataPromise}) => {
    const infos = use(dataPromise)
    const [stackAdd, setStackAdd]=useState([]);
    return (
        <div>
            <AllCard infos={infos} stackAdd={stackAdd} setStackAdd={setStackAdd} />
            
        </div>
    );
};

export default MainPart;
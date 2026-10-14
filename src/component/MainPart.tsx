import { use } from "react";

interface Info {
  id: number;
  title: string;
  description: string;
  badge: string;
  category: string;
  level: string;
  rating: number;
}
const MainPart = ({dataPromise}: {dataPromise:Promise<Info[]>}) => {
    const infos = use(dataPromise)
    console.log(infos);
    return (
        <div>
            
        </div>
    );
};

export default MainPart;
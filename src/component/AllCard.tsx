import type { Info } from "./type";

const AllCard = ({infos}:{infos:Info[]}) => {
    console.log(infos);
    return (
        <div className="flex justify-between">
            <div>a</div>
            <div>b</div>
            
        </div>
    );
};

export default AllCard;
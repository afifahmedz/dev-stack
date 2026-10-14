import type React from "react";
import Card from "./Card";
import type { Info } from "./type";
interface CardProps {
  infos: Info[];
  stackAdd: string[]
  setStackAdd: React.Dispatch<React.SetStateAction<string[]>>;
}


export const AllCard = ({infos,stackAdd}: CardProps) => {
    console.log(stackAdd);
    return (
  <div className=" container mx-auto my-2 grid grid-cols-16 gap-6">

    
    <div className="col-span-16 md:col-span-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {infos.map((info) => (
          <div key={info.id}>
            <Card item={info} onAdd={() => {}} />
          </div>
        ))}
      </div>
    </div>

    
    <div className="col-span-16 md:col-span-4">
      <div className="card w-96 bg-base-100 card-lg shadow-sm border mt-6">
  <div className="card-body">
    <h2 className="card-title">Your Stack</h2>
    <p>No teachnologies selected</p>
    <div className="justify-center ">
     <p>{stackAdd.length === 0 ? "Your Stack Is Empty" : stackAdd.length}</p>
    </div>
  </div>
</div>
    </div>

  </div>
);
}


export default AllCard;


import { Star } from "lucide-react";

const TechCard = ({ item, onAdd }) => {
  return (
    <div className="card bg-base-100 w-84 shadow-sm border m-3.5">
       
        <figure className="pt-8">
  <img
    src={item.img}
    alt={`${item.title} logo`}
    className="h-16 w-16 object-contain"
  />
</figure>
     

      <div className="card-body items-center text-center">
        <div className="badge badge-info badge-outline">
          {item.badge}
        </div>

        <h2 className="card-title">{item.title}</h2>

        <p>{item.description}</p>

        <div className="flex justify-between items-center gap-4 mt-3">
          <span className="badge badge-ghost">
            {item.category}
          </span>

          <span>{item.level}</span>

          <div className="flex items-center gap-1">
            <Star size={16} fill="gold" color="gold" />
            {item.rating}
          </div>
        </div>

        <div className="card-actions w-full mt-4">
          <button
            onClick={() => onAdd?.(item)}
            className="btn btn-primary w-full"
          >
            Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;

import { FC } from "react";
import { Stage } from "../Types/Stage";

type Props = {
  stage: Stage;
};

const StageCard: FC<Props> = ({ stage }) => {
  return (
    <div className="md:w-56 w-44 rounded shadow-lg hover:shadow-2xl hover:cursor-pointer">
      <img className="w-full" src={stage.image} alt={stage.title}></img>
      <div className="p-4 bg-zinc-900 flex justify-center">
        <div className="font-bold text-xs md:text-sm">{stage.title}</div>
      </div>
    </div>
  );
};

export default StageCard;

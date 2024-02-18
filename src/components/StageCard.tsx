import { FC } from "react";
import { Stage } from "../Types/Stage";
import classNames from "classnames";

type Props = {
  stage: Stage;
  isBanned: boolean
  setBannedStages: (titel: string) => {}
};

const StageCard: FC<Props> = ({ stage, isBanned, setBannedStages
}) => {
  return (
    <button className="hover:cursor-pointer" onClick={() => setBannedStages(x => [...x, (stage.title)])}>
      <div className="md:w-56 w-44 rounded shadow-lg hover:shadow-2xl">
        <img className={classNames("w-full",
          isBanned ? "grayscale" : "")} src={stage.image} alt={stage.title}></img>
        <div className="p-4 bg-zinc-900 flex justify-center">
          <div className="font-bold text-xs md:text-sm">{stage.title}</div>
        </div>
      </div>
    </button>
  );
};

export default StageCard;

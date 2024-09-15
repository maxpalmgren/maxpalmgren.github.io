import { FC, useState } from "react";
import { Stage } from "../Types/Stage";
import classNames from "classnames";
import { RxCrossCircled } from "react-icons/rx";

type Props = {
  stage: Stage;
  bannedStages: string[];
  setBannedStages: (title: React.SetStateAction<string[]>) => void;
  mode: "ban" | "pick";
  pickStage: (stage: Stage) => void;
};

const StageCard: FC<Props> = ({
  stage,
  setBannedStages,
  mode,
  bannedStages,
  pickStage,
}) => {
  const [isBanned, setIsBanned] = useState<boolean>();
  const [isPicked, setIsPicked] = useState<boolean>(false);

  const handleBanStage = () => {
    if (mode === "ban") {
      if (bannedStages.some((x) => x === stage.title)) return;
      setBannedStages((prev) => [...prev, stage.title]);
      setIsBanned(true);
    }
    if (mode === "pick") {
      setIsPicked(true);
      pickStage(stage);
    }
  };

  return (
    <button
      className={classNames(
        mode == "pick"
          ? "hover:ring-green-500 hover:ring"
          : "ring-red-500 hover:ring",
        isBanned ? "hover:ring-0" : "",
        isPicked ? "ring ring-green-500" : "",
        "hover:cursor-pointer relative"
      )}
      onClick={handleBanStage}
    >
      <div className="md:w-56 w-40 rounded shadow-lg hover:shadow-2xl">
        <img
          className={classNames("w-full z-0", isBanned ? "grayscale" : "")}
          src={stage.image}
          alt={stage.title}
        ></img>
        {isBanned && (
          <RxCrossCircled
            size={68}
            className="text-red-600 top-1/4 absolute w-full"
          />
        )}
        <div className="p-4 bg-zinc-900 flex justify-center">
          <div className="font-bold text-xs md:text-sm">{stage.title}</div>
        </div>
      </div>
    </button>
  );
};

export default StageCard;

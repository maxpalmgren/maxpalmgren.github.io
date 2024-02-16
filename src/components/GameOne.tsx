import { FC } from "react";
import StageCard from "./StageCard";
import StageData from "../assets/stages/stages.json";
import { Stage } from "../Types/Stage";

type Props = {
  playerOne: string;
  playerTwo: string;
};

const GameOne: FC<Props> = ({ playerOne, playerTwo }) => {
  const randomizeFirstBanner = () => {
    const random = Math.random();
    if (random > 0.5) {
      return playerOne;
    } else return playerTwo;
  };

  const stages = StageData as Stage[];

  return (
    <div>
      <div className="flex justify-center mb-4">
        {randomizeFirstBanner()} starts to ban 4 maps
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {stages.map((stage) => (
          <StageCard stage={stage} />
        ))}
      </div>
    </div>
  );
};

export default GameOne;

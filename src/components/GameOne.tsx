import { FC, useEffect, useState } from "react";
import StageCard from "./StageCard";
import StageData from "../assets/stages/stages.json";
import { Stage } from "../Types/Stage";
import MatchDialog from "./MatchDialog";
import { log } from "console";

type Props = {
  playerOne: string
  playerTwo: string
  playerOneScore: number
  setPlayerOneScore: (point: number) => void
  playerTwoScore: number
  setPlayerTwoScore: (point: number) => void
  setScreen: (screen: "game2") => void
};

const GameOne: FC<Props> = ({ playerOne, playerTwo, playerOneScore, playerTwoScore, setScreen, setPlayerOneScore, setPlayerTwoScore }) => {
  const [bannedStages, setBannedStages] = useState<string[]>([]);
  const [firstPicker, setFirstPicker] = useState<string>("");
  const [secondPicker, setSecondPicker] = useState<string>("");
  const [mode, setMode] = useState<"ban" | "pick">("ban");
  const stages = StageData as Stage[];
  const [pickedStage, setPickedStage] = useState<Stage>(stages[0])
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false)


  const randomizeFirstBanner = () => {
    if (firstPicker !== "") return;
    if (secondPicker !== "") return;
    const random = Math.random();
    if (random > 0.5) {
      setFirstPicker(playerOne);
      setSecondPicker(playerTwo);
    } else {
      setFirstPicker(playerTwo);
      setSecondPicker(playerOne);
    }
  };

  useEffect(() => {
    randomizeFirstBanner();
  }),
    [randomizeFirstBanner];

  const handlePicker = () => {
    if (bannedStages.length < 3) {
      return (
        <div>
          <span className="font-bold">{firstPicker}</span> bans 3 stages
        </div>
      );
    }
    if (bannedStages.length < 7) {
      return (
        <div>
          <span className="font-bold">{secondPicker}</span> bans 4 stages
        </div>
      );
    }
    if (bannedStages.length > 6) {
      if (mode === "ban") {
        setMode("pick");
      }
      return (
        <div>
          <span className="font-bold">{firstPicker}</span> select 1 stage
        </div>
      );
    } else return "";
  };

  const handleWin = (winner: string) => {
    if (winner === playerOne) {
      setPlayerOneScore(1)
      setIsOpenModal(false)
      setScreen("game2")
    }
    if (winner === playerTwo) {
      setPlayerTwoScore(1)
      setIsOpenModal(false)
      setScreen("game2")
    }
  }

  const pickStage = (stage: Stage) => {
    setPickedStage(stage)
    setIsOpenModal(true)
  }

  return (
    <div className="relative">
      <MatchDialog
        playerOne={playerOne}
        playerTwo={playerTwo}
        stage={pickedStage}
        handleWin={handleWin}
        isOpen={isModalOpen}
      />
      <h1 className="text-3xl flex justify-center">{playerOneScore} - {playerTwoScore}</h1>
      <div className="flex justify-center sticky top-0 z-20 p-4 bg-slate-800 shadow-lg">
        {handlePicker()}
      </div>
      <div className="flex gap-2 flex-wrap justify-center mt-2">
        {stages.map((stage, i) => (
          <StageCard
            bannedStages={bannedStages}
            stage={stage}
            setBannedStages={(v) => setBannedStages(v)}
            mode={mode}
            key={`${stage}-${i}`}
            pickStage={pickStage}
          />
        ))}
      </div>
    </div>
  );
};

export default GameOne;

import { FC, useContext, useEffect, useState } from "react";
import { Stage } from "../Types/Stage";
import StageData from "../assets/stages/stages.json";
import MatchDialog from "./MatchDialog";
import StageCard from "./StageCard";
import { gameContext } from "@/context/GameContext";

const GameOne: FC = ({}) => {
  const {
    playerOne,
    playerTwo,
    playerOneScore,
    playerTwoScore,
    setScreen,
    setPlayerOneScore,
    setPlayerTwoScore,
  } = useContext(gameContext);
  const [bannedStages, setBannedStages] = useState<string[]>([]);
  const [firstPicker, setFirstPicker] = useState<string>("");
  const [secondPicker, setSecondPicker] = useState<string>("");
  const [mode, setMode] = useState<"ban" | "pick">("ban");
  const stages = StageData as Stage[];
  const [pickedStage, setPickedStage] = useState<Stage>(stages[0]);
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
  //const { toast } = useToast();

  useEffect(() => {
    const randomizeFirstBanner = () => {
      const random = Math.random();
      if (random > 0.5) {
        setFirstPicker(playerOne);
        setSecondPicker(playerTwo);
      } else {
        setFirstPicker(playerTwo);
        setSecondPicker(playerOne);
      }
    };
    randomizeFirstBanner();
  }, [playerOne, playerTwo]);

  const handlePicker = () => {
    if (bannedStages.length < 3) {
      //toast({ title: "skubidu" });
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
      setPlayerOneScore(1);
      setIsOpenModal(false);
      setScreen("gameloop");
    }
    if (winner === playerTwo) {
      setPlayerTwoScore(1);
      setIsOpenModal(false);
      setScreen("gameloop");
    }
  };

  const pickStage = (stage: Stage) => {
    if (bannedStages.some((x) => x === stage.title)) return;
    setPickedStage(stage);
    setIsOpenModal(true);
  };

  return (
    <div className="relative">
      <MatchDialog
        playerOne={playerOne}
        playerTwo={playerTwo}
        stage={pickedStage}
        handleWin={handleWin}
        isOpen={isModalOpen}
      />
      <div className="flex justify-center items-center">
        <span className="mr-4">{`${playerOne}`}</span>{" "}
        <span className="font-bold text-2xl">
          {playerOneScore} - {playerTwoScore}
        </span>{" "}
        <span className="ml-4">{playerTwo}</span>
      </div>
      <div className="flex justify-center sticky top-0 z-20 p-4 bg-slate-800 shadow-lg">
        {handlePicker()}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
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

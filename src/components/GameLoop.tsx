import { Stage } from "@/Types/Stage";
import { FC, useContext, useEffect, useState } from "react";
import StageData from "../assets/stages/stages.json";
import MatchDialog from "./MatchDialog";
import StageCard from "./StageCard";
import { GameContext } from "@/context/GameContext";

const GameLoop: FC = () => {
  const {
    playerOne,
    playerTwo,
    playerOneScore,
    playerTwoScore,
    setPlayerOneScore,
    setPlayerTwoScore,
    setScreen,
    bestOfMode,
    setWinner,
  } = useContext(GameContext);
  const stages = StageData as Stage[];
  const [bannedStages, setBannedStages] = useState<string[]>([]);
  const [pickedStage, setPickedStage] = useState<Stage | undefined>(undefined);
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
  const [lastWinner, setLastWinner] = useState<string>("");
  const [lastLoser, setLastLoser] = useState<string>("");
  const [mode, setMode] = useState<"ban" | "pick">("ban");
  const [flipswitch, setFlipSwitch] = useState<number>(0);

  useEffect(() => {
    if (playerOneScore === 1) {
      setLastWinner(playerOne);
      setLastLoser(playerTwo);
    }
    if (playerTwoScore === 1) {
      setLastWinner(playerTwo);
      setLastLoser(playerOne);
    }
  }, []);

  const handlePicker = () => {
    if (bannedStages.length < 3) {
      return (
        <div>
          <span className="font-bold">{lastWinner}</span> bans 3 stages
        </div>
      );
    } else {
      if (mode === "ban") {
        setMode("pick");
      }
      return (
        <div>
          <span className="font-bold">{lastLoser}</span> picks a stage
        </div>
      );
    }
  };

  const resetBannedStages = () => {
    setBannedStages([]);
    setPickedStage(undefined);
  };

  const handleWin = (winner: string) => {
    if (winner === playerOne) {
      setPlayerOneScore(playerOneScore + 1);
      setLastWinner(playerOne);
      setLastLoser(playerTwo);
      setFlipSwitch((x) => x + 1);
      resetBannedStages();
      setMode("ban");
      setIsOpenModal(false);
      if (
        (playerOneScore === 2 || playerTwoScore === 2) &&
        bestOfMode === "Bo3"
      ) {
        setWinner(playerOne);
        setScreen("end");
      }
      if (
        (playerOneScore === 3 || playerTwoScore === 3) &&
        bestOfMode === "Bo5"
      ) {
        setWinner(playerOne);
        setScreen("end");
      }
    }
    if (winner === playerTwo) {
      setPlayerTwoScore(playerTwoScore + 1);
      setLastWinner(playerTwo);
      setLastLoser(playerOne);
      setFlipSwitch((x) => x + 1);
      resetBannedStages();
      setMode("ban");
      setIsOpenModal(false);
      if (
        (playerOneScore === 2 || playerTwoScore === 2) &&
        bestOfMode === "Bo3"
      ) {
        setWinner(playerTwo);
        setScreen("end");
      }
      if (
        (playerOneScore === 3 || playerTwoScore === 3) &&
        bestOfMode === "Bo5"
      ) {
        setWinner(playerTwo);
        setScreen("end");
      }
    }
  };
  const pickStage = (stage: Stage) => {
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
      <div className="flex gap-2 flex-wrap justify-center mt-2">
        {stages.map((stage, i) => (
          <StageCard
            bannedStages={bannedStages}
            stage={stage}
            setBannedStages={(v) => setBannedStages(v)}
            mode={mode}
            key={`${stage}-${i}-${flipswitch}`}
            pickStage={pickStage}
          />
        ))}
      </div>
    </div>
  );
};

export default GameLoop;

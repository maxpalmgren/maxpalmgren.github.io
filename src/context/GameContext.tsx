import { GameData } from "@/Types/GameData";
import { createContext, PropsWithChildren, useState } from "react";

export const GameContext = createContext<GameData>();

const GameProvider = ({ children }: PropsWithChildren) => {
  const [selectedRuleset, setSelectedruleset] = useState<string>("EU Ruleset");
  const [playerOne, setPlayerOne] = useState<string>("Player 1");
  const [playerTwo, setPlayerTwo] = useState<string>("Player 2");
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");
  const [mode, setMode] = useState<"Bo3" | "Bo5">("Bo5");
  const [screen, setScreen] = useState<
    "onBoard" | "game1" | "gameloop" | "end"
  >("onBoard");

  if (GameContext === undefined) return null;

  return (
    <GameContext.Provider
      value={{
        selectedRuleset,
        setSelectedruleset,
        playerOne,
        setPlayerOne,
        playerTwo,
        setPlayerTwo,
        playerOneScore,
        setPlayerOneScore,
        playerTwoScore,
        setPlayerTwoScore,
        winner,
        setWinner,
        mode,
        setMode,
        screen,
        setScreen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

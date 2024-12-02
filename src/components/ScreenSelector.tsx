import { FC, useContext, useState } from "react";
import Onboard from "../wizard/Onboard";
import GameOne from "./GameOne";
import GameLoop from "./GameLoop";
import EndScreen from "./EndScreen";
import { gameContext } from "@/context/GameContext";

const rulesetList = ["EU Ruleset"];

const ScreenSelector: FC = () => {
  const { screen } = useContext(gameContext);

  if (screen === "onBoard")
    return (
      <div>
        <Onboard rulesetList={rulesetList}></Onboard>
      </div>
    );
  if (screen === "game1")
    return (
      <div className="px-2">
        <GameOne />
      </div>
    );
  if (screen === "gameloop")
    return (
      <div className="px-2">
        <GameLoop />
      </div>
    );
  if (screen === "end")
    return (
      <EndScreen
        winner={winner}
        setScreen={(e) => setScreen(e)}
        setPlayerOneScore={setPlayerOneScore}
        setPlayerTwoScore={setPlayerTwoScore}
      />
    );
};

export default ScreenSelector;

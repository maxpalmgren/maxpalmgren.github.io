import { FC, useState } from "react";
import Onboard from "../wizard/Onboard";
import StageCard from "./StageCard";
import StageData from "../assets/stages/stages.json";
import { Stage } from "../Types/Stage";

const stages = StageData as Stage[];
const rulesetList = ["EU Ruleset"];

const ScreenSelector: FC = () => {
  const [selectedRuleset, setSelectedruleset] = useState<string>("EU Ruleset");
  const [playerOne, setPlayerOne] = useState<string>("Player 1");
  const [playerTwo, setPlayerTwo] = useState<string>("Player 2");
  const [mode, setMode] = useState("Bo3");
  const [screen, setScreen] = useState<
    "onBoard" | "game1" | "game2" | "game3" | "end"
  >("onBoard");

  if (screen === "onBoard")
    return (
      <div>
        <Onboard
          rulesetList={rulesetList}
          selectedRuleset={selectedRuleset}
          setSelectedruleset={() => setSelectedruleset}
          playerOne={playerOne}
          playerTwo={playerTwo}
          setPlayerOne={(e) => setPlayerOne(e)}
          setPlayerTwo={(e) => setPlayerTwo(e)}
          setScreen={(e) => setScreen(e)}
          mode={mode}
          setMode={(e) => setMode(e)}
        ></Onboard>
      </div>
    );
  if (screen === "game1")
    return (
      <div className="flex gap-2">
        <StageCard stage={stages[1]} />
        <StageCard stage={stages[0]} />
      </div>
    );
};

export default ScreenSelector;

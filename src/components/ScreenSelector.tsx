import { FC, useState } from "react";
import Onboard from "../wizard/Onboard";
import GameOne from "./GameOne";
import GameLoop from "./GameLoop";
import EndScreen from "./EndScreen";

const rulesetList = ["EU Ruleset"];

const ScreenSelector: FC = () => {
  const [selectedRuleset, setSelectedruleset] = useState<string>("EU Ruleset");
  const [playerOne, setPlayerOne] = useState<string>("Player 1");
  const [playerTwo, setPlayerTwo] = useState<string>("Player 2");
  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);
  const [winner, setWinner] = useState<string>("");
  const [mode, setMode] = useState("Bo5");
  const [screen, setScreen] = useState<
    "onBoard" | "game1" | "gameloop" | "end"
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
      <div className="px-2 md:w-2/3">
        <GameOne
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
          setScreen={(e) => setScreen(e)}
          setPlayerOneScore={setPlayerOneScore}
          setPlayerTwoScore={setPlayerTwoScore}
        />
      </div>
    );
  if (screen === "gameloop")
    return (
      <div className="px-2">
        <GameLoop
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
          setScreen={(e) => setScreen(e)}
          setPlayerOneScore={setPlayerOneScore}
          setPlayerTwoScore={setPlayerTwoScore}
          bestOfMode={mode}
          setWinner={setWinner}
        />
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

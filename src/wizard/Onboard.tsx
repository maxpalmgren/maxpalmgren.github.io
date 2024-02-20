import { FC } from "react";
import RulesetDropdown from "../components/RulesetDropdown";
import ModeDropdown from "../components/ModeDropdown";

type Props = {
  rulesetList: string[];
  selectedRuleset: string;
  setSelectedruleset: () => void;
  playerOne: string;
  setPlayerOne: (value: string) => void;
  playerTwo: string;
  setPlayerTwo: (value: string) => void;
  setScreen: (screen: "game1") => void;
  mode: string;
  setMode: (mode: string) => void;
};

const Onboard: FC<Props> = ({
  selectedRuleset,
  rulesetList,
  setSelectedruleset,
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
  setScreen,
  mode,
  setMode,
}) => {
  const onButtonClick = () => {
    setScreen("game1");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-slate-800">
      <div>
        <h2 className="text-4xl">Smash Stage Picker</h2>
      </div>
      <div className="flex gap-1">
        <div className="relative">
          <RulesetDropdown
            rulesetList={rulesetList}
            selectedRuleset={selectedRuleset}
            setSelectedruleset={setSelectedruleset}
          ></RulesetDropdown>
        </div>
        <div className="relative">
          <ModeDropdown mode={mode} setMode={(e) => setMode(e)}></ModeDropdown>
        </div>
      </div>
      <div className="text-black flex gap-1">
        <input
          type="text"
          className="border p-1 rounded-md"
          placeholder={playerOne}
          onChange={(e) => setPlayerOne(e.target.value)}
        />
        <input
          type="text"
          className="border p-1 rounded-md"
          placeholder={playerTwo}
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </div>
      <button
        onClick={onButtonClick}
        className="bg-green-400 hover:bg-green-600 rounded-md p-2 w-2/3"
      >
        GO!
      </button>
    </div>
  );
};

export default Onboard;

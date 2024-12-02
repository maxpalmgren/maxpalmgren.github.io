import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, useContext } from "react";
import ModeDropdown from "../components/ModeDropdown";
import RulesetDropdown from "../components/RulesetDropdown";
import { gameContext } from "@/context/GameContext";

type Props = {
  rulesetList: string[];
};

const Onboard: FC<Props> = ({ rulesetList }) => {
  const {
    selectedRuleset,
    setSelectedruleset,
    playerOne,
    setPlayerOne,
    playerTwo,
    setPlayerTwo,
    setScreen,
    mode,
    setMode,
  } = useContext(gameContext);
  const onButtonClick = () => {
    setScreen("game1");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-slate-800 px-2">
      <div>
        <h2 className="text-4xl">Smash Stage Picker</h2>
      </div>
      <div className="flex gap-1">
        <div className="relative text-black">
          <RulesetDropdown
            rulesetList={rulesetList}
            selectedRuleset={selectedRuleset}
            setSelectedruleset={setSelectedruleset}
          ></RulesetDropdown>
        </div>
        <div className="relative text-black">
          <ModeDropdown mode={mode} setMode={(e) => setMode(e)}></ModeDropdown>
        </div>
      </div>
      <div className="flex">
        <Input
          placeholder={playerOne}
          onChange={(e) => setPlayerOne(e.target.value)}
        />
        <Input
          placeholder={playerTwo}
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </div>
      <Button onClick={onButtonClick}>GO!</Button>
      <div className="m:w-2/3 w-full px-2">
        <p className="font-semibold">EU Ruleset</p>
        <p>
          In game 1, a randomized player bans 3 stages, then the other player
          bans 4 stages, and then the first player chooses from the remaining
          two.
        </p>
        <p>
          In subsequent games, the winner of the previous game will ban 3
          stages, loser picks from the remaining.
        </p>
      </div>
    </div>
  );
};

export default Onboard;

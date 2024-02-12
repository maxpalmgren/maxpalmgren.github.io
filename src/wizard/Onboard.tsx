import { FC } from "react";
import RulesetDropdown from "../components/RulesetDropdown";

type Props = {
  rulesetList: string[];
  selectedRuleset: string;
  setSelectedruleset: () => void;
};

const Onboard: FC<Props> = ({
  selectedRuleset,
  rulesetList,
  setSelectedruleset,
}) => {
  return (
    <div>
      <p className="text-sm">Choose ruleset:</p>
      <RulesetDropdown
        rulesetList={rulesetList}
        selectedRuleset={selectedRuleset}
        setSelectedruleset={setSelectedruleset}
      ></RulesetDropdown>
    </div>
  );
};

export default Onboard;

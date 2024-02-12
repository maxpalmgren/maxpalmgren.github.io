import { Listbox } from "@headlessui/react";
import { FC } from "react";

type Props = {
  rulesetList: string[];
  selectedRuleset: string;
  setSelectedruleset: () => void;
};

const RulesetDropdown: FC<Props> = ({
  selectedRuleset,
  rulesetList,
  setSelectedruleset,
}) => {
  return (
    <Listbox value={selectedRuleset} onChange={setSelectedruleset}>
      <Listbox.Button className="border w-max py-1 px-1 rounded-md">
        {selectedRuleset}
      </Listbox.Button>
      <Listbox.Options className="px-1 border rounded-md py-1">
        {rulesetList.map((ruleset, i) => (
          <Listbox.Option key={`${ruleset}-${i}`} value={ruleset}>
            {ruleset}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RulesetDropdown;

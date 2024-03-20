import { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedRuleset}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={selectedRuleset}
          onValueChange={setSelectedruleset}
        >
          {rulesetList.map((ruleset, i) => (
            <DropdownMenuRadioItem value={ruleset} key={i}>
              {ruleset}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RulesetDropdown;

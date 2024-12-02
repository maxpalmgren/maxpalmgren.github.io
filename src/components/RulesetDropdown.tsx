import { FC, useContext } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { GameContext } from "@/context/GameContext";

type Props = {
  rulesetList: string[];
};

const RulesetDropdown: FC<Props> = ({ rulesetList }) => {
  const { setSelectedruleset, selectedRuleset } = useContext(GameContext);
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

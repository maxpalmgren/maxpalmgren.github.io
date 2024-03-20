import { FC } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const modes = ["Bo3", "Bo5"];

type Props = {
  mode: string;
  setMode: (e: string) => void;
};

const ModeDropdown: FC<Props> = ({ mode, setMode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{mode}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={mode} onValueChange={setMode}>
          {modes.map((ruleset, i) => (
            <DropdownMenuRadioItem value={ruleset} key={i}>
              {ruleset}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeDropdown;

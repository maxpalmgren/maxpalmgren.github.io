import { Listbox } from "@headlessui/react";
import { FC } from "react";

const modes = ["Bo3", "Bo5"];

type Props = {
  mode: string;
  setMode: (e: string) => void;
};

const ModeDropdown: FC<Props> = ({ mode, setMode }) => {
  return (
    <Listbox value={mode} onChange={setMode}>
      <Listbox.Button className="border w-max py-1 px-1 rounded-md hover:bg-slate-600">
        {mode}
      </Listbox.Button>
      <Listbox.Options className="px-1 border rounded-md py-1 absolute bg-slate-800">
        {modes.map((mode, i) => (
          <Listbox.Option
            key={`${mode}-${i}`}
            value={mode}
            className="hover:bg-slate-600 cursor-pointer"
          >
            {mode}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ModeDropdown;

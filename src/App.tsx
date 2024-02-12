import { useState } from "react";
import Onboard from "./wizard/Onboard";

const rulesetList = ["EU Ruleset"];

function App() {
  const [selectedRuleset, setSelectedruleset] = useState<string>("EU Ruleset");

  return (
    <div className="bg-slate-800 text-white w-screen h-screen">
      <div className="flex justify-center">
        <Onboard
          rulesetList={rulesetList}
          selectedRuleset={selectedRuleset}
          setSelectedruleset={() => setSelectedruleset}
        ></Onboard>
      </div>
    </div>
  );
}

export default App;

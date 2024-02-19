import { FC, useEffect, useState } from "react";
import StageCard from "./StageCard";
import StageData from "../assets/stages/stages.json";
import { Stage } from "../Types/Stage";

type Props = {
  playerOne: string;
  playerTwo: string;
};

const GameOne: FC<Props> = ({ playerOne, playerTwo }) => {
  const [bannedStages, setBannedStages] = useState<string[]>([])
  const [firstPicker, setFirstPicker] = useState<string>("")
  const [secondPicker, setSecondPicker] = useState<string>("")
  const [mode, setMode] = useState<"ban" | "pick">("ban")

  const stages = StageData as Stage[]

  const randomizeFirstBanner = () => {
    if (firstPicker !== "") return
    if (secondPicker !== "") return
    const random = Math.random()
    if (random > 0.5) {
      setFirstPicker(playerOne)
      setSecondPicker(playerTwo)
    } else {
      setFirstPicker(playerTwo)
      setSecondPicker(playerOne)
    }
  };

  useEffect(() => {
    randomizeFirstBanner()
  }), [randomizeFirstBanner]


  const findBannedStage = (stageTitle: string) => {
    if (bannedStages.find(x => x == stageTitle)) {
      return true
    } else return false
  }

  const handlePicker = () => {
    if (bannedStages.length < 3) {
      return <div><span className="font-bold">{firstPicker}</span> bans 3 stages</div>
    }
    if (bannedStages.length < 7) {
      return <div><span className="font-bold">{secondPicker}</span> bans 4 stages</div>
    }
    if (bannedStages.length > 6) {
      if (mode === "ban") {
        setMode("pick")
      }
      return (<div><span className="font-bold">{firstPicker}</span> select 1 stage</div>)
    }
    else return ""
  }

  return (
    <div className="relative h-screen">
      <div className="flex justify-center sticky top-0 z-20 p-4 bg-slate-800 shadow-lg">
        {handlePicker()}
      </div>
      <div className="flex gap-2 flex-wrap justify-center mt-2">
        {stages.map((stage, i) => (
          <StageCard stage={stage} setBannedStages={(v) => setBannedStages(v)} mode={mode} key={`${stage}-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default GameOne;

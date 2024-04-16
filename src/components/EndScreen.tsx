import { FC } from "react";
import { Button } from "./ui/button";

type Props = {
  winner: string;
  setScreen: (screen: "onBoard") => void;
  setPlayerOneScore: (point: number) => void;
  setPlayerTwoScore: (point: number) => void;
};

const EndScreen: FC<Props> = ({
  setScreen,
  setPlayerOneScore,
  setPlayerTwoScore,
  winner,
}) => {
  const onResume = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setScreen("onBoard");
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h1 className="text-2xl">{winner} WINS</h1>
      <Button onClick={onResume}>Restart</Button>
    </div>
  );
};

export default EndScreen;

import { FC } from "react";
import { Stage } from "../Types/Stage";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

type Props = {
  playerOne: string;
  playerTwo: string;
  stage: Stage | undefined;
  handleWin: (winner: string) => void;
  isOpen: boolean;
};

const MatchDialog: FC<Props> = ({
  playerOne,
  playerTwo,
  stage,
  handleWin,
  isOpen,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogTitle className="flex justify-center items-center">
          {stage?.title}
        </DialogTitle>
        <img src={stage?.image} alt="" />
        <DialogTitle className="flex justify-center">Who won?</DialogTitle>
        <Button onClick={() => handleWin(playerOne)}>{playerOne}</Button>
        <Button onClick={() => handleWin(playerTwo)}>{playerTwo}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default MatchDialog;

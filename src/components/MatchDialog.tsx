import { FC } from "react";
import { Stage } from "../Types/Stage";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

type Props = {
  playerOne: string;
  playerTwo: string;
  stage: Stage;
};

const MatchDialog: FC<Props> = ({ playerOne, playerTwo, stage }) => {
  return (
    <Dialog>
      <DialogTrigger>s</DialogTrigger>
      <DialogContent>
        <DialogTitle className="flex justify-center items-center">
          {stage.title}
        </DialogTitle>
        <img src={stage.image} alt="" />
        <DialogTitle className="flex justify-center">Who won?</DialogTitle>
        <Button>{playerOne}</Button>
        <Button>{playerTwo}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default MatchDialog;

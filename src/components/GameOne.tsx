import { FC } from "react";
import StageCard from "./StageCard";
import StageData from "../assets/stages/stages.json";
import { Stage } from "../Types/Stage";

type Props = {
    playerOne: string
    playerTwo: string
}



const GameOne: FC<Props> = ({ playerOne, playerTwo }) => {

    const randomizeFirstBanner = () => {
        const random = Math.random()
        if (random > 0.5) {
            return playerOne
        }
        else return playerTwo
    }

    const stages = StageData as Stage[];

    return (

        <div>
            <div className="flex justify-center mb-4">{randomizeFirstBanner()} starts to ban 4 maps</div>
            <div className="flex gap-2 flex-wrap justify-center">
                <StageCard stage={stages[0]} />
                <StageCard stage={stages[1]} />
                <StageCard stage={stages[2]} />
                <StageCard stage={stages[3]} />
                <StageCard stage={stages[4]} />
                <StageCard stage={stages[5]} />
                <StageCard stage={stages[6]} />
            </div>
        </div>
    )
}

export default GameOne
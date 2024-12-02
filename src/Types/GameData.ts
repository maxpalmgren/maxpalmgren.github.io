export type GameData = {
  selectedRuleset: string
  setSelectedruleset: React.Dispatch<React.SetStateAction<string>> 
  playerOne: string
  setPlayerOne: React.Dispatch<React.SetStateAction<string>>
  playerTwo: string
  setPlayerTwo: React.Dispatch<React.SetStateAction<string>>
  playerOneScore: number
  setPlayerOneScore: React.Dispatch<React.SetStateAction<number>>
  playerTwoScore: number
  setPlayerTwoScore: React.Dispatch<React.SetStateAction<number>>
  winner: string 
  setWinner: React.Dispatch<React.SetStateAction<string>>
  mode: string
  setMode: React.Dispatch<React.SetStateAction<string>>
  screen: string
  setScreen: React.Dispatch<React.SetStateAction<"onBoard" | "game1" | "gameloop" | "end">>
}
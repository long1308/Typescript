import { useState } from "react"
import Board from "./components/board"
import { calculateWinner } from "./helpers"
// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
const App = () => {
    


    const BOARD_SIZE = 9
    // eslint-disable-next-line no-unused-vars
    const [board, setBoard] = useState(Array(BOARD_SIZE).fill(null))
    // kiểm tra x o
    const[xIsNext, setXIsNext] = useState(true)
    //undu 
    const [game, setLastGame] = useState(null) 
    const [play,setPlay] = useState(null)
    const  winner = calculateWinner(board)
    const handClick = (index) => {

        // console.log(index);
        const boardCopy = [...board]
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext? "X" : "O"

        setLastGame(board)
        setPlay(boardCopy[index])
        setBoard(boardCopy)
        setXIsNext(!xIsNext) 
    }
    const handResetGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
        document.querySelectorAll(".square").forEach((square) => {
            square.classList.remove("bg-yellow-500");
        });
    }

    // undu
    const handUnduGame = () => {
        if(game && play !== null && !winner){
      setBoard(game)
      setXIsNext(play)
      setLastGame(null)
      setPlay(null)
        }

    }
    // ramdom 
    const getRandomIndex = () => {
        let index;
        do {
          index = Math.floor(Math.random() * BOARD_SIZE);
        } while (board[index]);
        return index;
      };
    return <div >
        <div className="flex justify-center items-center mt-20 flex-col">
            <h1 className="text-3xl">{`Lượt đánh tiếp ${xIsNext ? "X" :"O"}`}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handResetGame}>Reset Game</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handUnduGame}>undo</button>
            <h1>{winner ? `Winner is ${winner}` : null}</h1>
        </div>
            <div className="flex justify-center items-center mt-10 ">
            <Board cells ={board} onClick = {handClick} />
           
        </div>

    </div>
}

export default App
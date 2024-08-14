import React, { useState } from 'react'
import Square from '../Square/Square'
import '../../App.css'
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] != null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : 'O';
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    const handleReset = () => {
        setState(Array(9).fill(null));
    }
    return (
        <div>
            {/* <div className="board-container" style={{ height:"100vh",width:"100vw", display:"flex",alignItems:"center",flexDirection:"column"}}> */}
            <div className="board-container" style={{ display:'flex', justifyContent:'center',height:"100vh",width:"100vw",position: "relative"}}>
                {isWinner ? (<>{isWinner} won the game
                    <button onClick={handleReset}>Play again</button>
                </>) :
                    (<>
                        <h4>Player {isXTurn ? "X" : "O"} please move</h4>
                        <div className="board" style={{display:"flex",flexDirection:"column",position: "absolute", transform:"translate(-50%, -50%)",top:"45%",left:"50%"}}>
                            <div className="board-row">
                                <Square onClick={() => handleClick(0)} value={state[0]} />
                                <Square onClick={() => handleClick(1)} value={state[1]} />
                                <Square onClick={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="board-row">
                                <Square onClick={() => handleClick(3)} value={state[3]} />
                                <Square onClick={() => handleClick(4)} value={state[4]} />
                                <Square onClick={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="board-row">
                                <Square onClick={() => handleClick(6)} value={state[6]} />
                                <Square onClick={() => handleClick(7)} value={state[7]} />
                                <Square onClick={() => handleClick(8)} value={state[8]} />
                            </div>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default Board
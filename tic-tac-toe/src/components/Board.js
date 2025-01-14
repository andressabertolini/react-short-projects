import { useState } from 'react';
import Square from './Square';
import RestartButton from './RestartButton';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);

    const handleClick = (i) => {
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        player ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
        setSquares(nextSquares);
        setPlayer(!player);
    }

    const restartClick = () => {
        setSquares(Array(9).fill(null));
        setPlayer(true);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(squares);
    let gameStatus;
    if (winner) {
        gameStatus = "Winner: " + winner;
    } else {
        gameStatus = "Next player: " + (player ? "X" : "O");
    }

    return(
        <>
            <div className="status">{ gameStatus }</div>
            <div className="board">
                <div className="board-row">
                    <Square value={ squares[0] } onSquareClick={ () => handleClick(0) } />
                    <Square value={ squares[1] } onSquareClick={ () => handleClick(1) } />
                    <Square value={ squares[2] } onSquareClick={ () => handleClick(2) } />
                </div>
                <div className="board-row">
                    <Square value={ squares[3] } onSquareClick={ () => handleClick(3) } />
                    <Square value={ squares[4] } onSquareClick={ () => handleClick(4) } />
                    <Square value={ squares[5] } onSquareClick={ () => handleClick(5) } />
                </div>
                <div className="board-row">
                    <Square value={ squares[6] } onSquareClick={ () => handleClick(6) } />
                    <Square value={ squares[7] } onSquareClick={ () => handleClick(7) } />
                    <Square value={ squares[8] } onSquareClick={ () => handleClick(8) } />
                </div>
            </div>
            <RestartButton buttonClick={ restartClick } />
        </>
    )
}

export default Board;
import React from "react";
import './App.css';

export function GameBoard(props) {
    let box = (boxId) => {
        return <div id={"box-" + (boxId + 1)}
                    className={"box" + (props.winningCombo && props.winningCombo.includes(boxId) ? ' highlight-teal' : '')}
                    onClick={() => props.onClick(boxId)}>{props.gameBoard[boxId]}
        </div>
    }

    return <div id="game-board" className="row ma">
        <div id={"row-1"} className="row">
            {box(0)}
            {box(1)}
            {box(2)}
        </div>
        <div id={"row-2"} className="row">
            {box(3)}
            {box(4)}
            {box(5)}
        </div>
        <div id={"row-3"} className="row">
            {box(6)}
            {box(7)}
            {box(8)}
        </div>
    </div>
}
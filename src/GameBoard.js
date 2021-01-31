import React from "react";

export function GameBoard(props) {
 return <div id="game-board">
        <div id={"row-1"}>
            <div id={"box-1"} onClick={() => props.onClick(0)}>{props.gameBoard[0]}</div>
            <div id={"box-2"} onClick={() => props.onClick(1)}>{props.gameBoard[1]}</div>
            <div id={"box-3"} onClick={() => props.onClick(2)}>{props.gameBoard[2]}</div>
        </div>
        <div id={"row-2"}>
            <div id={"box-4"} onClick={() => props.onClick(3)}>{props.gameBoard[3]}</div>
            <div id={"box-5"} onClick={() => props.onClick(4)}>{props.gameBoard[4]}</div>
            <div id={"box-6"} onClick={() => props.onClick(5)}>{props.gameBoard[5]}</div>
        </div>
        <div id={"row-3"}>
            <div id={"box-7"} onClick={() => props.onClick(6)}>{props.gameBoard[6]}</div>
            <div id={"box-8"} onClick={() => props.onClick(7)}>{props.gameBoard[7]}</div>
            <div id={"box-9"} onClick={() => props.onClick(8)}>{props.gameBoard[8]}</div>
        </div>
    </div>
}
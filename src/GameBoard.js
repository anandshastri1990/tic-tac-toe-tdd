import React from "react";
import './App.css';

export function GameBoard(props) {
 return <div id="game-board" className="row ma">
        <div id={"row-1"} className="row">
            <div id={"box-1"} className="box" onClick={() => props.onClick(0)}>{props.gameBoard[0]}</div>
            <div id={"box-2"} className="box" onClick={() => props.onClick(1)}>{props.gameBoard[1]}</div>
            <div id={"box-3"} className="box" onClick={() => props.onClick(2)}>{props.gameBoard[2]}</div>
        </div>
        <div id={"row-2"} className="row">
            <div id={"box-4"} className="box" onClick={() => props.onClick(3)}>{props.gameBoard[3]}</div>
            <div id={"box-5"} className="box" onClick={() => props.onClick(4)}>{props.gameBoard[4]}</div>
            <div id={"box-6"} className="box" onClick={() => props.onClick(5)}>{props.gameBoard[5]}</div>
        </div>
        <div id={"row-3"} className="row">
            <div id={"box-7"} className="box" onClick={() => props.onClick(6)}>{props.gameBoard[6]}</div>
            <div id={"box-8"} className="box" onClick={() => props.onClick(7)}>{props.gameBoard[7]}</div>
            <div id={"box-9"} className="box" onClick={() => props.onClick(8)}>{props.gameBoard[8]}</div>
        </div>
    </div>
}
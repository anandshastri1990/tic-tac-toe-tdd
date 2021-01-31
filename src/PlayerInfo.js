import {GAME_STATUS} from "./GameManager";
import React, {useState} from "react";

export function PlayerInfo(props) {
    const [player1Name, setPlayer1Name] = useState('Player 1');
    const [player2Name, setPlayer2Name] = useState('Player 2');

    return <div className="ma">
        <input id={"player1"}
               className="player-name mr-5"
               value={player1Name}
               onChange={($event) => {
                   setPlayer1Name($event.target.value)
               }}/>

        <input id={"player2"}
               className="player-name"
               value={player2Name}
               onChange={($event) => {
                   setPlayer2Name($event.target.value)
               }}/>

        <div className="mt-4 mb-4">{
            props.gameStatus === GAME_STATUS.WON ?
                <div id={"winner"} className="game-result"> {(props.player1Turn ? player2Name : player1Name) + " won!"}
                </div>
                : props.gameStatus === GAME_STATUS.TIE ?
                <div id={"tie"} className="game-result">It's a tie!</div> :
                <div id={"turn"} className="player-instruction">
                    {props.player1Turn ? (player1Name + "'s turn") : (player2Name + "'s turn")}
                </div>
        }
        </div>
    </div>
}

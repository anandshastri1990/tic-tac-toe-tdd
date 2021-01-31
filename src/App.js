import './App.css';
import React from "react";
import {GameBoard} from "./GameBoard";
import {GAME_STATUS, getGameStatus} from "./GameManager";

export class App extends React.Component {
    state = {
        player1Name: "Player 1",
        player2Name: "Player 2",
        player1Turn: true,
        gameBoard: [null, null, null, null, null, null, null, null, null],
        gameStatus: GAME_STATUS.IN_PROGRESS
    }

    render() {
        return <div>
            <div id={"header"}>Tic Tac Toe</div>

            <input id={"player1"}
                   value={this.state.player1Name}
                   onChange={($event) => {
                       this.setState({player1Name: $event.target.value})
                   }}/>

            <input id={"player2"}
                   value={this.state.player2Name}
                   onChange={($event) => {
                       this.setState({player2Name: $event.target.value})
                   }}/>

            {this.state.gameStatus === GAME_STATUS.WON ?
                <div
                    id={"winner"}> {(this.state.player1Turn ? this.state.player2Name : this.state.player1Name) + " won!"}
                </div>
                : this.state.gameStatus === GAME_STATUS.TIE ?
                    <div id={"tie"}>It's a tie!</div> :
                    <div id={"turn"}>
                        {this.state.player1Turn ? (this.state.player1Name + "'s turn") : (this.state.player2Name + "'s turn")}
                    </div>
            }

            <GameBoard onClick={(indexOfBox) => this.onBoxClicked(indexOfBox)} gameBoard={this.state.gameBoard}/>

        </div>
    }

    onBoxClicked(indexOfBox) {
        if (this.state.gameBoard[indexOfBox] === null) {
            let gameBoardShallow = [...this.state.gameBoard];
            gameBoardShallow[indexOfBox] = this.state.player1Turn === true ? 'X' : 'O';
            this.setState((prevState) => (
                {
                    player1Turn: !prevState.player1Turn,
                    gameBoard: gameBoardShallow,
                    gameStatus: getGameStatus(gameBoardShallow)
                }));
        }
    }


}

export default App;

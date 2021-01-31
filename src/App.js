import './App.css';
import React from "react";
import {GameBoard} from "./GameBoard";
import {GAME_STATUS, getGameStatus} from "./GameManager";
import {PlayerInfo} from "./PlayerInfo";

export class App extends React.Component {
    state = {
        player1Turn: true,
        gameBoard: [null, null, null, null, null, null, null, null, null],
        gameStatus: GAME_STATUS.IN_PROGRESS
    }

    render() {
        return <div>
            <div id={"header"}>Tic Tac Toe</div>

            <PlayerInfo gameStatus={this.state.gameStatus}
                        player1Turn={this.state.player1Turn}/>

            <GameBoard onClick={(indexOfBox) => this.onBoxClicked(indexOfBox)}
                       gameBoard={this.state.gameBoard}/>

            <button id="restart"
                    onClick={() => this.restartGame()}>Restart game</button>

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

    restartGame() {
        this.setState({
            gameBoard: [null, null, null, null, null, null, null, null, null],
            player1Turn: true,
        })
    }

}

export default App;

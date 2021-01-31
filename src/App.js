import './App.css';
import React from "react";
import {GameBoard} from "./GameBoard";
import {GAME_STATUS, getGameStatus, PLAYER1_TOKEN, PLAYER2_TOKEN} from "./GameManager";
import {PlayerInfo} from "./PlayerInfo";

export class App extends React.Component {
    state = this.initState();

    initState() {
        return {
            gameBoard: [null, null, null, null, null, null, null, null, null],
            player1Turn: true,
            gameStatus: GAME_STATUS.IN_PROGRESS,
            prevGameBoards: []
        }
    }

    render() {
        return <div>
            <div id={"header"}>Tic Tac Toe</div>

            <PlayerInfo gameStatus={this.state.gameStatus}
                        player1Turn={this.state.player1Turn}/>

            <GameBoard onClick={(indexOfBox) => this.onBoxClicked(indexOfBox)}
                       gameBoard={this.state.gameBoard}/>

            <button id="restart"
                    onClick={() => this.restartGame()}>Restart game
            </button>

            <button id="undo"
                    onClick={() => this.undoAMove()}>Undo a move
            </button>

        </div>
    }

    onBoxClicked(indexOfBox) {
        if (this.state.gameBoard[indexOfBox] === null && this.state.gameStatus === GAME_STATUS.IN_PROGRESS) {
            let gameBoardShallow = [...this.state.gameBoard];
            gameBoardShallow[indexOfBox] = this.state.player1Turn === true ? PLAYER1_TOKEN : PLAYER2_TOKEN;
            this.setState((prevState) => (
                {
                    player1Turn: !prevState.player1Turn,
                    gameBoard: gameBoardShallow,
                    gameStatus: getGameStatus(gameBoardShallow),
                    prevGameBoards: [...prevState.prevGameBoards, prevState.gameBoard]
                }));
        }
    }

    restartGame() {
        this.setState(this.initState())
    }

    undoAMove() {
        this.setState( (prevState) => ({
            gameBoard: prevState.prevGameBoards[prevState.prevGameBoards.length - 1],
            prevGameBoards: prevState.prevGameBoards.slice(0,prevState.prevGameBoards.length - 1)
        }));
    }

}

export default App;

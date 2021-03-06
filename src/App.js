import './App.css';
import React from "react";
import {GameBoard} from "./GameBoard";
import {GAME_STATUS, getGameStatus, getWinningCombo, PLAYER1_TOKEN, PLAYER2_TOKEN} from "./GameManager";
import {PlayerInfo} from "./PlayerInfo";
import {ControlPanel} from "./ControlPanel";

export class App extends React.Component {
    state = this.initState();

    initState() {
        return {
            gameBoard: Array(9).fill(null),
            player1Turn: true,
            gameStatus: GAME_STATUS.IN_PROGRESS,
            prevGameBoards: []
        }
    }

    render() {
        return <div className="app">
            <div id={"header"} className="header mb-4">Tic Tac Toe</div>

            <PlayerInfo gameStatus={this.state.gameStatus}
                        player1Turn={this.state.player1Turn}/>

            <GameBoard onClick={(indexOfBox) => this.onBoxClicked(indexOfBox)}
                       gameBoard={this.state.gameBoard}
                       winningCombo={getWinningCombo(this.state.gameBoard)}
                       player1Turn={!this.state.player1Turn}/>

            <ControlPanel restartGame={() => this.restartGame()}
                          undoAMove={() => this.undoAMove()}/>
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
        if (this.state.gameBoard.filter((box) => box !== null).length > 0) {
            this.setState((prevState) => ({
                gameBoard: prevState.prevGameBoards[prevState.prevGameBoards.length - 1],
                prevGameBoards: prevState.prevGameBoards.slice(0, prevState.prevGameBoards.length - 1),
                player1Turn: !prevState.player1Turn,
                gameStatus: GAME_STATUS.IN_PROGRESS
            }));
        }
    }

}

export default App;

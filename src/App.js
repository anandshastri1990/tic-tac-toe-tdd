import './App.css';
import React from "react";
import {GameBoard} from "./GameBoard";

export class App extends React.Component {
    state = {
        player1Name: "Player 1",
        player2Name: "Player 2",
        player1Turn: true,
        gameBoard: [null, null, null, null, null, null, null, null, null],
        showWinner: false
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

            <div id={"turn"}>
                {this.state.player1Turn ? (this.state.player1Name + "'s turn") : (this.state.player2Name + "'s turn")}
            </div>

            {this.state.showWinner ?
                <div
                    id={"winner"}> {(this.state.player1Turn ? this.state.player2Name : this.state.player1Name) + " won!"}
                </div> : <div/>
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
                    showWinner: this.winningCombo(gameBoardShallow)
                }));
        }
    }

    winningCombo(allBoxes) {
        return ((allBoxes[0] === 'X' && allBoxes[1] === 'X' && allBoxes[2] === 'X')
            || (allBoxes[3] === 'O' && allBoxes[4] === 'O' && allBoxes[5] === 'O'));
    }
}

export default App;

import './App.css';
import React from "react";

export class App extends React.Component {
    state = {
        player1Name: "Player 1",
        player2Name: "Player 2",
        player1Turn: true,
        gameBoard: [null, null, null, null, null, null, null, null, null]
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

            <div id="game-board">
                <div id={"row-1"}>
                    <div id={"box-1"} onClick={() => this.onBoxClicked(0)}>{this.state.gameBoard[0]}</div>
                    <div id={"box-2"} onClick={() => this.onBoxClicked(1)}>{this.state.gameBoard[1]}</div>
                    <div id={"box-3"} onClick={() => this.onBoxClicked(2)}>{this.state.gameBoard[2]}</div>
                </div>
                <div id={"row-2"}>
                    <div id={"box-4"} onClick={() => this.onBoxClicked(3)}>{this.state.gameBoard[3]}</div>
                    <div id={"box-5"} onClick={() => this.onBoxClicked(4)}>{this.state.gameBoard[4]}</div>
                    <div id={"box-6"} onClick={() => this.onBoxClicked(5)}>{this.state.gameBoard[5]}</div>
                </div>
                <div id={"row-3"}>
                    <div id={"box-7"} onClick={() => this.onBoxClicked(6)}>{this.state.gameBoard[6]}</div>
                    <div id={"box-8"} onClick={() => this.onBoxClicked(7)}>{this.state.gameBoard[7]}</div>
                    <div id={"box-9"} onClick={() => this.onBoxClicked(8)}>{this.state.gameBoard[8]}</div>
                </div>
            </div>

        </div>
    }

    onBoxClicked(indexOfBox) {
        if (this.state.gameBoard[indexOfBox] === null) {
            let gameBoardShallow = [...this.state.gameBoard];
            gameBoardShallow[indexOfBox] = this.state.player1Turn === true ? 'X' : 'O';
            this.setState((prevState) => ({player1Turn: !prevState.player1Turn, gameBoard: gameBoardShallow}));
        }
    }
}

export default App;

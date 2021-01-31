import './App.css';
import React from "react";

export class App extends React.Component {
    state = {
        player1Name: "Player 1",
        player2Name: "Player 2",
        player1Turn: true,
        gameBoard: [null, null]
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
                <div id={"box-1"}
                     onClick={() => this.onBoxClicked(0)}>{this.state.gameBoard[0]}</div>
                <div id={"box-2"}
                     onClick={() => this.onBoxClicked(1)}>{this.state.gameBoard[1]}</div>
                <div id={"box-3"}/>
                <div id={"box-4"}/>
                <div id={"box-5"}/>
                <div id={"box-6"}/>
                <div id={"box-7"}/>
                <div id={"box-8"}/>
                <div id={"box-9"}/>
            </div>

        </div>
    }

    onBoxClicked(indexOfBox) {
        let gameBoardShallow = [...this.state.gameBoard];
        if (gameBoardShallow[indexOfBox] === null) {
            gameBoardShallow[indexOfBox] = this.state.player1Turn === true ? 'X' : 'O';
        }
        this.setState((prevState) => ({player1Turn: !prevState.player1Turn, gameBoard: gameBoardShallow}));
    }
}

export default App;

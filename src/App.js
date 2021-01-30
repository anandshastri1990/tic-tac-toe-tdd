import './App.css';
import React from "react";

export class App extends React.Component {
    state = {player1Name: "Player 1", player2Name: "Player 2"}

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
                Player 1's turn
            </div>
        </div>
    }
}

export default App;

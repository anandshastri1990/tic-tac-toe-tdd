import './App.css';
import React from "react";

export class App extends React.Component {
    state = {player1Name: "", player2Name: ""}

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
        </div>
    }
}

export default App;

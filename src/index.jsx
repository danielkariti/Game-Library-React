import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';

import { getGames, addGame } from "./game-service";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  state = {
    games: [],
    currentGame: "",
    isEditMode: false,
  };

  componentDidMount = async () => {
    this.getGames();
  };

  getGames = async () => {
    const games = await getGames();
    this.setState({ games });
  };

  addGame = async (game) => {
    await addGame(game);
    this.getGames();
    this.setState({ currentGame: "" });
  };

  onGameChange = (evt) => {
    const { value } = evt.target;
    this.setState({ currentGame: value });
  };

  render() {
    const { games } = this.state;
    return (
      <div>
        <h1 className="title font-2">Ste<span>am</span></h1>
        {games &&
          games.map((game) => (
            <Card style={{ display:'flex' ,
             width: '100%' , 
             padding: '1rem' , 
             margin : '1rem',
             "box-shadow": '1px 1px 4px rgba(0,0,0,0.5)'
            }}> <Game game={game} getGames={this.getGames} key={game.id} />  </Card>
          ))}
       <div className="addGameInput">
        <input
          placeholder="Game Name"
          value={this.state.currentGame}
          onChange={this.onGameChange}
        />
       </div>
        <button  className="btn btn-primary btn-xl" onClick={() => this.addGame(this.state.currentGame)}>
          Add new game
        </button>
       
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-container"));

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { getGames, deleteGame } from './game-service';

class App extends React.Component {
  state = {
    games: [],
  };

  componentDidMount = async () => {
    this.getGames();
  };

  getGames = async () => {
    const games = await getGames();
    this.setState({ games });
  }

  deleteGame = async id => {
    await deleteGame(id);
    this.getGames();
  };

  render() {
    const { games } = this.state;
    return (
      <div>
        <h1>Game Library</h1>
        <hr />
        {games &&
          games.map(game => (
            <div key={game.id}>
              <label>{game.name}</label>
              <button>edit</button>
              <button onClick={() => this.deleteGame(game.id)}>delete</button>
            </div>
          ))}
          <input placeholder="game name" /><button>add new game</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-container'));

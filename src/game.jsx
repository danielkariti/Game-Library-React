import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteGame, editGame } from "./game-service";
import Button from 'react-bootstrap/Button';

class Game extends React.Component {
  state = {
    isEditMode: false,
    name: "",
  };

  deleteGame = async (id) => {
    await deleteGame(id);
    this.props.getGames();
  };

  editGame = (name) => {
    this.setState({ isEditMode: true, name: name });
  };

  saveEdit = async () => {
    const { id } = this.props.game;
    const { name } = this.state;
    this.setState({ isEditMode: false })
    await editGame(id, name);
    this.props.getGames();
  }

  onNameChange = ({ target }) => {
      this.setState({ name: target.value });
  }

  render() {
    const { game } = this.props;
    return (
      <div className="game">
        <label>{game.name}</label>
        <button  className="btn btn-primary"  onClick={() => this.editGame(game.name)}>Edit</button>
        <button  className="btn btn-primary" onClick={() => this.deleteGame(game.id)}>Delete</button>
        {
            this.state.isEditMode ?
            <>
                <input type="text" value={this.state.name} onChange={this.onNameChange} />   
                <button className="btn btn-primary" onClick={() => this.saveEdit()}>Save</button>
            </> :
            null
        }
      </div>
    );
  }
}

export default Game;

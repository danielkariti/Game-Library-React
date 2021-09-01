/** A simple REST server built with express */

const shortid = require('shortid');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

/* Setup express middlewares */
app.use(bodyParser.json());
app.use(allowCorsMiddleware);

/* API */
app.get('/game', getGames);
app.get('/game/:id', getGame);
app.put('/game/:id', editGame);
app.post('/game', addGame);
app.delete('/game/:id', deleteGame);
/* Health endpoint */
app.get('/health', getHealth);

/* Start server */
app.listen(3000, () =>
  console.log(
    `app listening on port ${PORT}. Go to http://localhost:${PORT}/health to test that the server is running.`
  )
);

/* The mock 'database' */
let games = [
  { id: '23TplPdS', name: 'Dwarf Fortress' },
  { id: '46Juzcyx', name: 'The Sims 2' },
  { id: '2WEKaVNO', name: 'Elasto Mania' },
  { id: 'nYrnfYEv', name: 'Team Fortress 2' },
];

/* IMPLEMENTATION DETAILS */

/* Return a list of all gmes
 * Example: localhost:3000/game
 */
function getGames(req, res) {
  return res
    .status(200)
    .json(games)
    .end();
}
/* Return a specific game based on id
 * Example: localhost:3000/game/23TplPdS
 */
function getGame(req, res) {
  const id = req.params.id;
  const game = games.find(g => g.id == id);
  return game
    ? res
        .status(200)
        .json(game)
        .end()
    : res.status(404).end();
}
/* Add a new game to the list
 * Example: localhost:3000/game
 * Body: { "name": "Fresh Prince" } */
function addGame(req, res) {
  const name = req.body.name;
  if (!name) {
    return res.status(401).end();
  }
  const newGame = { id: shortid.generate(), name };
  games = [...games, newGame];
  return res
    .status(201)
    .json(newGame)
    .end();
}
/* Delete a game from the list
 * Example: localhost:3000/game/23TplPdS
 */
function deleteGame(req, res) {
  const id = req.params.id;
  const removedGame = games.find(g => g.id == id);
  games = games.filter(g => g.id != id);
  return res
    .status(200)
    .json(removedGame)
    .end();
}
/* Edit an existing game in the list
 * Example: localhost:3000/game/23TplPdS
 * Body: { "name": "Minesweeper" }
 */
function editGame(req, res) {
  const id = req.params.id;
  const name = req.body.name;
  if (!name || !id) {
    return res.status(400).end();
  }
  games = games.map(g => (g.id == id ? { ...g, name } : g));
  return res
    .status(200)
    .json(games.find(g => g.id == id))
    .end();
}

function getHealth(req, res) {
  const msg = `The server is running. Try http://localhost:${PORT}/game to list all games.`;
  return res
    .status(200)
    .send(msg)
    .end();
}

/* MISC */

/* Add CORS-headers to every request */
function allowCorsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

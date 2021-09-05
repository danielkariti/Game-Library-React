/**
 * This file handles all the communication with the server.
 * The different endpoints are described in server.js.
 */
const apiUrl = "http://localhost:3000";

export async function getGames() {
  const resp = await fetch(`${apiUrl}/game`);
  return await resp.json();
}

export async function deleteGame(gameId) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, { method: "DELETE" });
  return await resp.json();
}

export async function addGame(game) {
  const resp = await fetch(`${apiUrl}/game`, {
    body: JSON.stringify({ name: game }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
}

export async function editGame(gameId, game) {
  const resp = await fetch(`${apiUrl}/game/${gameId}`, {
    body: JSON.stringify({ name: game }),
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
}

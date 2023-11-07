import { userAgent } from "next/server";
import { Server } from "socket.io";

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  // Create an object to store all lobbies
  const lobbies = {};

  io.on("connection", (socket) => {
    // Create a new lobby when the user clicks the "Create Lobby" button
    socket.on("createLobby", (username, currentImage) => {
      const lobbyId = Math.floor(Math.random() * 100000);
      lobbies[lobbyId] = {
        players: [{ username: username, image: currentImage }],
      };

      // Send the lobby ID to the user
      socket.emit("lobbyCreated", lobbyId);
    });

    // Join a lobby when the user clicks the "Join Lobby" button
    socket.on("enterLobby", (username, image, lobbyId) => {
      // Check if the lobby exists
      if (!lobbies[lobbyId]) {
        socket.emit("lobbyDoesNotExist");
        return;
      }
      // Add the user to the lobby
      lobbies[lobbyId].players.push({ username: username, image: image });

      io.to(lobbyId).emit("allLobbies", lobbies[lobbyId].players);
    });

    // When you first click on the enter lobby button. Before character choose
    socket.on("joinLobby", (lobbyId) => {
      // Check if the lobby exists

      if (!lobbies[lobbyId]) {
        socket.emit("lobbyDoesNotExist");
      } else {
        socket.emit("lobbyExists", lobbyId);
      }
    });

    // Join a lobby when the user clicks the "Join Lobby" button
    socket.on("getLobby", (lobbyId) => {
      const lobby = lobbies[lobbyId];
      if (!lobby) {
        return [];
      }
      const allPlayers = lobby.players;
      socket.emit("allLobbies", allPlayers);
    });

    // Start the game when the lobby is full
    socket.on("startGame", () => {
      const lobby = lobbies[socket.lobbyId];
      4; // Start the game for all players in the lobby
      // for (const player of lobby.players) {
      //   player.emit("startGame");
      // }
    });

    socket.on("leaveLobby", (username, lobbyCode) => {
      const lobby = lobbies.get(lobbyCode);
      if (!lobby) {
        return;
      }
      lobby.players.splice(lobby.players.indexOf(username), 1);
    });

    // socket.on("disconnect", () => {
    //   for (const lobby of lobbies.values()) {
    //     lobby.players.splice(lobby.players.indexOf(socket), 1);
    //   }
    // });
  });

  console.log("Setting up socket");
  res.end();
}

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

  //   io.on("connection", (socket) => {
  //     socket.on("send-message", (obj) => {
  //       io.emit("receive-message", obj);
  //     });
  //   });

  io.on("connection", (socket) => {
    // Create a new lobby when the user clicks the "Create Lobby" button
    socket.on("createLobby", () => {
      const lobbyId = Math.floor(Math.random() * 100000);
      console.log(lobbyId);
      lobbies[lobbyId] = {
        players: [],
      };
      console.log("lobby created 1");

      // Send the lobby ID to the user
      socket.emit("lobbyCreated", lobbyId);
    });

    // Join a lobby when the user clicks the "Join Lobby" button
    socket.on("joinLobby", (username, lobbyId) => {
      // Check if the lobby exists

      if (!lobbies[lobbyId]) {
        console.log(lobbies);
        socket.emit("lobbyDoesNotExist");
        return;
      }
      console.log(username);
      console.log(lobbies);

      console.log("lobby joined");

      // Add the user to the lobby
      lobbies[lobbyId].players.push(username);

      console.log(lobbies);

      // Send the lobby state to the user
      //   socket.emit("lobbyState", lobbies[lobbyId]);
      socket.emit("lobbyState", lobbies);
    });

    // Start the game when the lobby is full
    socket.on("startGame", () => {
      const lobby = lobbies[socket.lobbyId];
      console.log("starttt");
      // Start the game for all players in the lobby
      for (const player of lobby.players) {
        player.emit("startGame");
      }
    });
  });

  console.log("Setting up socket");
  res.end();
}

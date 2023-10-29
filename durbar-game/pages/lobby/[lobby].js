import React from "react";

import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import { useRouter } from "next/router";

let socket;
const lobby = () => {
  const [allPlayers, setAllPlayers] = useState();
  const [lobbyState, setLobbyState] = useState("lol");

  const router = useRouter();
  const {
    query: { lobbyId },
  } = router;

  useEffect(() => {
    socketInitializer();

    return () => {
      if (socket) {
        // Disconnect from the Socket.io server.
        socket.disconnect();
      }
    };
  }, []);

  async function socketInitializer() {
    await fetch("/api/socket");

    socket = io();

    if (lobbyId) {
      socket.emit("getLobby", lobbyId);
    }

    socket.on("allLobbies", (allPlayers) => {
      setAllPlayers(allPlayers);
      // Update the lobby state
    });

    // Create a function to create a new lobby
  }
  return (
    <div>
      lobby:
      {typeof allPlayers}
      {JSON.stringify(allPlayers)}
      {allPlayers?.map((players, index) => (
        <div key={index}>
          {players.username}: {players.image}
        </div>
      ))}
    </div>
  );
};

export default lobby;

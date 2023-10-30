import React from "react";

import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar";

let socket;
const lobby = () => {
  const [allPlayers, setAllPlayers] = useState();
  const [lobbyState, setLobbyState] = useState("lol");
  const [updatePlayer, setuUdatePlayer] = useState(" ");

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
  }, [lobbyId, updatePlayer]);

  async function socketInitializer() {
    await fetch("/api/socket");

    socket = io();

    if (lobbyId) {
      socket.emit("getLobby", lobbyId);
    }

    socket.on("lobbyState"),
      (lobbyId) => {
        setUpdatePlayer(lobbyId);
      };

    socket.on("allLobbies", (allPlayers) => {
      setAllPlayers(allPlayers);
      // Update the lobby state
    });

    // Create a function to create a new lobby
  }
  return (
    <>
      <Navbar />
      <main className=" h-full w-full relative">
        <div className="  ml-12 mr-12 -mt-24">
          {allPlayers?.map((players, index) => (
            <div key={index}>
              {players.username}: {players.image}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default lobby;

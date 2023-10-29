import React from "react";

import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

import Link from "next/link";

let socket;
const play = () => {
  const [play, setPlay] = useState(true);
  // const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [allPlayers, setAllPlayers] = useState([]);
  // Create a state variable to store the lobby ID
  const [lobbyId, setLobbyId] = useState(" ");
  const [lobbyState, setLobbyState] = useState("lol");
  const [newLobbyId, setNewLobbyId] = useState(" ");

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

    socket.on("lobbyState", (lobbies) => {
      setLobbyState(lobbies);
      // Update the lobby state
    });
    socket.on("lobbyDoesNotExist", () => {
      setLobbyState("no lobby exist");
      // Update the lobby state
    });

    // Create a function to create a new lobby

    console.log("a");
  }

  const clearLobby = useMemo(() => {
    return () => {
      socket.emit("clearLobby");
    };
  }, [socket]);

  // Handle start game event
  const startGame = () => {
    socket.on("startGame", () => {
      // Start the game
      console.log("yaayyy");
    });
  };

  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("emitted : " + username, newLobbyId);
    socket.emit("joinLobby", username, lobbyId);
  };

  return (
    <div className=" transition-all duration-300">
      {play && (
        <div
          onClick={(e) => setPlay(false)}
          className=" cursor-pointer group  flex justify-center items-center relative mt-20 z-50"
        >
          <div className=" w-28 h-28 rounded-full bg-[#2A6F8D] self-center text-center flex justify-center items-center border-2 border-black group-hover:w-32 group-hover:h-32 transition-all duration-700  absolute ">
            <h2 className=" font-knightWarrior tracking-widest text-[#E5CCA5] font-outline-2  text-3xl">
              Play
            </h2>
          </div>
          <div className=" absolute  w-32 h-32 hover:h-36 group-hover:w-36 rounded-full bg-none border-4 border-[#C14A38] border-dashed rotate-180 transition-all duration-300 "></div>
        </div>
      )}

      {!play && (
        <div className=" group  flex justify-center items-center relative mt-20 z-50">
          <div
            className=" absolute -top-10 left-0 cursor-pointer"
            onClick={(e) => setPlay(true)}
          >
            back
          </div>
          <div className=" flex flex-col w-full gap-y-4 justify-center items-center">
            <div className=" w-full">
              <label className="block mb-2 text-lg font-medium text-[#614C41] font-knightWarrior tracking-widest">
                Enter Lobby
              </label>
              <input
                type="email"
                id="email"
                className="border font-knightWarrior w-full tracking-widest bg-[#E5CCA5] text-[#614C41] border-[#614C41]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="Lobby ID"
                required
              />
            </div>
            <span className=" font-knightWarrior tracking-widest">or</span>
            <Link href="/createLobby">
              <button className="cursor-pointer  w-full text-[#614C41] border-[#614C41]">
                <span className=" font-knightWarrior tracking-widest">
                  Create a Lobby
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default play;

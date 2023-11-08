import React, { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/navbar";
import io from "socket.io-client";
import { useRouter } from "next/router";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";
import ImageCard from "@/components/UI/imageCard";

let socket;

const index = () => {
  const router = useRouter();
  const [duration, setDuration] = useState("");
  const [maxAttempt, setMaxAttempt] = useState("");
  const [maxHeist, setMaxHeist] = useState("");
  const [initialTreasure, setInitialTreasure] = useState("");
  const [lootValue, setLootValue] = useState("");

  const handleDurationChange = (newValue) => {
    setDuration(newValue);
  };
  const handleMaxAttemptChange = (newValue) => {
    setMaxAttempt(newValue);
  };

  const handleMaxHeistChange = (newValue) => {
    setMaxHeist(newValue);
  };

  const handleInitialTreasureChange = (newValue) => {
    setInitialTreasure(newValue);
  };

  const handleLootValueChange = (newValue) => {
    setLootValue(newValue);
  };

  useEffect(() => {
    socketInitializer();

    return () => {
      if (socket) {
        // Disconnect from the Socket.io server.
        socket.disconnect();
      }
    };
  }, []);

  const createLobby = () => {
    console.log(username);
    socket.emit("createLobby", username, currentImage);
  };

  async function socketInitializer() {
    await fetch("/api/socket");

    socket = io();

    socket.on("lobbyCreated", (lobbyId) => {
      setLobbyId(lobbyId);
      router.push({
        pathname: `/lobby/${lobbyId}`,
        query: {
          lobbyId,
        },
      });
    });
  }
  return (
    <>
      <main className=" h-full w-full">
        <Navbar />
        <div className="w-full px-12 mt-12">
          <div className=" flex divide-x-2 gap-x-4 ml-10">
            <div className=" flex-[1.3] flex flex-col gap-y-8 ">
              <span className="block mb-3 text-3xl  text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                Create Game
              </span>
              <form className=" flex flex-wrap flex-grow gap-x-5 gap-y-10">
                <Input
                  label="Duration"
                  placeholder="30"
                  type="number"
                  onChange={handleDurationChange}
                />
                <Input
                  label="Max Attempt Per Heist"
                  placeholder="None"
                  onChange={handleMaxAttemptChange}
                />
                <Input
                  label="Max Heist Duration"
                  placeholder="None"
                  onChange={handleMaxHeistChange}
                />
                <Input
                  label="Initial Treasure"
                  placeholder="1000"
                  onChange={handleInitialTreasureChange}
                />
                <Input
                  label="Loot Value"
                  placeholder="60"
                  onChange={handleLootValueChange}
                />
              </form>
              <div className=" mt-10">
                <Button
                  text="Create Game"
                  font="knightWarrior"
                  tracking={true}
                />
              </div>
            </div>
            <div className=" flex-[2]">
              <div className="w-full ">
                <div className=" flex divide-x-2 gap-x-4 ml-14 mr-10">
                  <div className=" flex-[1.3] flex flex-col gap-y-8 ">
                    <div className=" flex justify-between items-end ">
                      <span className="block mb-3 text-3xl  text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                        Game Lobby
                      </span>
                      <span className="block mb-3 text-xl  text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                        Lobby ID: {}
                      </span>
                    </div>
                    <table class="text-left w-full">
                      <thead class="bg-[#579796] flex text-white w-full rounded-2xl">
                        <tr class="flex w-full my-2">
                          <th class="p-4 w-3/5">Durbar</th>
                          <th class="p-4 w-1/5">Ready</th>
                        </tr>
                      </thead>
                      <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full  h-[40vh]">
                        <tr class="flex w-full mb-4">
                          <td class="p-4 w-3/5 flex">
                            <div className=" w-32 h-40  ">
                              <ImageCard src={"/durbar/2.jpg"} />
                            </div>
                          </td>
                          <td class="p-4 w-1/5">Cats</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;

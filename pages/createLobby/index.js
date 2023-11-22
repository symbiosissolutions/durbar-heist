import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import io from "socket.io-client";
import { useRouter } from "next/router";
import Input from "@/components/UI/input";
import Button from "@/components/UI/button";

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

  const rows = [];
  for (let i = 0; i < 10; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(
      <tr className="flex w-full  " key={i}>
        <td className="p-4 w-4/5 flex  justify-start items-center  rounded-lg rounded-r-none my-2  ">
          Username Test
        </td>
        <td className="p-4 w-1/5 rounded-lg rounded-l-none my-2 ">
          <div className=" flex items-center gap-x-2">
            <span className=" border  border-green-500 rounded-full">
              <div className=" w-2 h-2 bg-green-500 rounded-full m-[0.1rem] " />
            </span>
            {/* <span className=" border  border-red-700 rounded-full">
              <div className=" w-2 h-2 bg-red-700 rounded-full m-[0.1rem] " />
            </span> */}
            <span className=" hidden sm:block">Ready</span>
          </div>
        </td>
      </tr>
    );
  }
  return (
    <>
      <main className=" h-full w-full">
        <Navbar />
        <div className="w-full sm:px-12 mt-12 px-3">
          <div className=" flex flex-col lg:flex-row gap-y-20  divide-y-2 lg:divide-x-2 lg:divide-y-0 gap-x-4 ml-5 flex-wrap flex-grow">
            <div className=" flex-[1.3] flex flex-col gap-y-8 ">
              <span className="block mb-3 text-3xl  text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                Create Game
              </span>
              <form className=" flex flex-wrap flex-grow  justify-between gap-y-10">
                <div className=" flex justify-between flex-col gap-y-10 sm:flex-row items-center gap-x-5 w-full">
                  <Input
                    label="Duration"
                    placeholder="30"
                    type="number"
                    icon="duration"
                    onChange={handleDurationChange}
                  />
                  <Input
                    label="Max Attempt Per Heist"
                    placeholder="None"
                    icon="maxAttempt"
                    onChange={handleMaxAttemptChange}
                  />
                </div>
                <div className=" flex justify-between flex-col gap-y-10 sm:flex-row items-center gap-x-5 w-full">
                  <Input
                    label="Max Heist Duration"
                    placeholder="None"
                    icon="maxDuration"
                    onChange={handleMaxHeistChange}
                  />
                  <Input
                    label="Initial Treasure"
                    placeholder="1000"
                    icon="coin"
                    onChange={handleInitialTreasureChange}
                  />
                </div>
                <Input
                  label="Loot Value"
                  placeholder="60"
                  icon="lootValue"
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
            <div className=" flex-[2] ">
              <div className="w-full md:flex md:justify-center md:items-center ">
                <div className=" flex md:divide-x-2 md:gap-x-4 lg:ml-14 mr-10 lg:mt-0 mt-16 w-full">
                  <div className="  flex flex-col gap-y-3 w-full ">
                    <div className=" flex md:justify-between flex-col md:flex-row gap-y-5 md:items-end ">
                      <span className="block mb-3 text-3xl   text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                        Game Lobby
                      </span>
                      <span className="block mb-3 md:text-xl  text-sm text-[rgb(97,76,65)] font-knightWarrior tracking-widest">
                        Lobby ID: 123456 {}
                      </span>
                    </div>
                    <table className="text-left w-full text-xs ">
                      <thead className="bg-[#579796] flex text-white w-full rounded-lg  shadow-md">
                        <tr className="flex w-full my-2">
                          <th className="p-4 w-4/5 ">Durbar Name</th>
                          <th className="p-4 w-1/5 ">Status</th>
                        </tr>
                      </thead>
                      <tbody className=" bg-[#579796] text-white  shadow-md rounded-lg flex flex-col items-center justify-between overflow-y-scroll no-scroll-bar w-full mt-1 lg:h-[60vh]  xl:h-[40vh]">
                        {rows}
                      </tbody>
                    </table>
                    <div className=" mt-10 flex justify-end mb-10 md:mb-0 ">
                      <Button
                        text="Start Game"
                        font="knightWarrior"
                        tracking={true}
                      />
                    </div>
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

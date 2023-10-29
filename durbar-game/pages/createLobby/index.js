import React, { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/navbar";
import io from "socket.io-client";
import { useRouter } from "next/router";

let socket;

const index = () => {
  const [username, setUsername] = useState(" ");
  const [currentImage, setCurrentImage] = useState(0);
  const [lobbyId, setLobbyId] = useState(" ");
  const router = useRouter();

  var slides = [];
  for (let index = 1; index < 24; index++) {
    slides = [...slides, { url: `/durbar/${index}.jpg` }];
  }

  useEffect(() => {
    socketInitializer();

    return () => {
      if (socket) {
        // Disconnect from the Socket.io server.
        socket.disconnect();
      }
    };
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentImage === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

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

        <div className=" flex w-full h-[80vh] justify-center items-center flex-row relative px-20 gap-x-10">
          <div className="flex-[2] w-[30%] h-[90%] relative mt-60 md:mt-8 group">
            <label className="block mb-4 text-lg font-medium text-[#614C41] font-knightWarrior tracking-widest ">
              Choose your Face
            </label>
            <div
              style={{ backgroundImage: `url(${slides[currentImage].url})` }}
              className="w-full h-full  bg-center bg-cover duration-500  bg-secondary border border-secondary rounded-lg shadow-lg"
            ></div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%]  -left-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={prevSlide}>left </button>
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] -right-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <button onClick={nextSlide} size={30}>
                right
              </button>
            </div>
          </div>
          <div className=" flex-[2]"></div>
          <div className=" flex-[2] flex  flex-col gap-y-8">
            <div className=" flex flex-col justify-center items-center mt-20 w-[99%]">
              <label className="block mb-4 text-lg font-medium text-[#614C41] font-knightWarrior tracking-widest">
                Enter the name for your Durbar
              </label>
              <input
                type="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="border font-knightWarrior w-full tracking-widest bg-[#E5CCA5] text-[#614C41] border-[#614C41]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="name"
                required
              />
              {username}
            </div>

            <button
              onClick={createLobby}
              className=" rounded px-5 py-2.5 overflow-hidden group bg-[#2A6F8D] relative hover:bg-gradient-to-r hover:from-[#2A6F8D] hover:to-[#579796] text-slate-200 hover:ring-2 hover:ring-offset-2 hover[#2A6F8D] transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-32 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease"></span>
              <span className="relative font-knightWarrior tracking-[0.2rem]">
                Create Lobby
              </span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;

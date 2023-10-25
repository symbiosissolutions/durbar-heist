import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [play, setPlay] = useState(true);
  return (
    <main className=" bg-primary w-full h-full">
      <nav className=" w-full flex justify-start items-center fixed ml-10 mt-5  z-10">
        <div className=" flex gap-x-2">
          <img
            src="/symbiosis/symbiosis-logo-b.png"
            alt="symbiosis logo"
            className=" w-24 h-24"
          />
          <div className=" text-black self-center  flex gap-x-2  ">
            <h1
              className=" font-sourceCode text-2xl
font-semibold"
            >
              Symbiosis Solutions
            </h1>
            <div className=" bg-secondary px-3 py-1 text-primary mt-4 rotate-[-5deg] hover:rotate-0 transition-all duration-300 ">
              <p className=" text-sm self-end font-normal"> Presents </p>
            </div>
          </div>
        </div>
      </nav>

      <div className=" flex justify-center items-center w-screen h-screen flex-col relative overflow-hidden ">
        <div>
          <h1 className=" text-[10rem] font-outline-2 font-knightWarrior tracking-wider font-medium group ">
            <div className=" flex justify-center items-center ">
              <span className=" text-[#E5CCA5] group-hover:-rotate-2  transition-all duration-500">
                D
              </span>
              <span className=" text-[#579796] group-hover:translate-y-3 transition-all duration-500">
                U
              </span>
              <span className=" text-[#614C41] transition-all duration-500">
                R
              </span>
              <span className=" text-[#ED7A69] group-hover:-translate-y-2 transition-all duration-500">
                B
              </span>
              <span className=" text-[#2A6F8D] group-hover:rotate-2 transition-all duration-500">
                A
              </span>
              <span className=" text-[#C14A38] group-hover:-translate-x-1 transition-all duration-500">
                R
              </span>
            </div>
          </h1>
          <p className=" font-knightWarrior float-right -mt-10 text-xl -mr-5">
            The game
          </p>

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
              <div className=" flex gap-x-4 justify-center items-center">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-lg font-medium text-[#614C41] font-knightWarrior tracking-widest"
                  >
                    Enter Lobby
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border font-knightWarrior tracking-widest bg-[#E5CCA5] text-[#614C41] border-[#614C41]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Lobby ID"
                    required
                  />
                </div>
                <span className=" font-knightWarrior tracking-widest">or</span>
                <button className="cursor-pointer  border bg-[#E5CCA5] text-[#614C41] border-[#614C41] h-28 p-8 rounded-lg">
                  <span
                    className=" font-knightWarrior tracking-widest"
                    onClick={createLobby}
                  >
                    Create a Lobby
                  </span>
                </button>
              </div>
              <div>
                <h1>Lobby {lobbyId}</h1>
                <button>Start Game</button>
              </div>
            </div>
          )}
        </div>

        <div className=" absolute top-[50%] -left-10 rotate-12 opacity-50 ">
          <div className="max-w-xs  bg-secondary border border-secondary rounded-lg shadow-lg">
            <img className="rounded-t-lg" src="/durbar/1.jpg" alt="" />
            <div className=" bg-[#E5CCA5] p-20" />
          </div>
        </div>

        <div className=" absolute top-1/4 -right-10 rotate-[-16deg] opacity-40 ">
          <div className="max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
            <img className="rounded-t-lg" src="/durbar/12.jpg" alt="" />
            <div className=" bg-[#C3B19B] p-20" />
          </div>
        </div>

        <div className=" absolute top-3/4 left-1/3 rotate-[-18deg] opacity-20 ">
          <div className="max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
            <img className="rounded-t-lg" src="/durbar/22.jpg" alt="" />
          </div>
        </div>

        <div className=" absolute bottom-3/4 left-2/5 rotate-[184deg] opacity-40 ">
          <div className=" max-w-xs bg-secondary border border-secondary rounded-lg shadow-lg">
            <img className="rounded-t-lg" src="/durbar/18.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

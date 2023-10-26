import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import Play from "@/components/home/play";
import Background from "@/components/home/background";

export default function Home() {
  // }
  return (
    <main className=" bg-primary w-full h-full">
      <Navbar />
      <div className=" flex justify-center items-center w-screen h-screen flex-col relative overflow-hidden ">
        <Hero />
        <Play />
        <Background />
      </div>
    </main>
  );
}

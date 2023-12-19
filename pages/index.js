import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import Play from "@/components/home/play";
import Background from "@/components/home/background";

export default function Home() {
  return (
    <main className="  overflow-hidden h-screen">
      <Navbar />
      <div className=" flex justify-center items-center w-screen h-full flex-col relative ml-12 mr-12 -mt-24  ">
        <Hero />
        <Play />
        <Background />
      </div>
    </main>
  );
}

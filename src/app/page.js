"use client";
import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { useTaskContext } from "@/context/TaskContext";

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center font-manrope bg-background">
      {/* Background text structure starts */}
      <p className="text-9xl font-black w-fit h-fit bg-text-center">
        <span className="bg-text">T</span>
        <span className="bg-text">a</span>
        <span className="bg-text">s</span>
        <span className="bg-text">k</span>
      </p>
      {/* Background text structure ends */}
      <div className="relative w-full max-w-screen-xl min-h-screen flex items-center flex-col gap-4 px-2 py-5 md:px-10 md:py-10 ">
        <Navbar />
        <div className="w-full min-h-[700px] rounded-xl bg-transparent flex justify-center items-start flex-wrap gap-4">
          <InfoCard />

          {tasks.map((task) => {
            return <Card key={task._id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import  acadamic1  from "../../../../public/images/education1.jpg";

export default function Education() {
  
    return (
        <section className="mt-11 bg-gray-200 py-7">
        <div className="flex justify-between mx-40">
          <div>
            <h3 className="text-4xl font-bold text-slate-700 w-[27rem]">Learning & Academic Milestones</h3>
          </div>
          <div className="flex text-slate-800 rounded-2xl border border-slate-300 py-1 h-10">
            <button className="px-2 bg-slate-300 rounded-xl ml-1">Education</button>
            <button className="px-2">Achievements</button>
          </div>
        </div>

        <div className="flex justify-center mt-9">
        <div className="flex w-full max-w-[80%]">
  <div className="flex justify-evenly bg-white w-full rounded-xl py-4">
    <div>
      <Image src={acadamic1} alt="Education 1" />
    </div>

    <div className="text-black flex flex-col items-center justify-center">
      <div className="flex items-center">
        <span className="text-orange-400">Masters</span>
        <span className="text-sm pl-2 text-slate-500">2024-2026</span>
      </div>
      <span className="font-semibold text-xl mt-1 ">MBA in Technology Management</span>
      <span className="font-thin text-slate-500">TA Pai Management Institute, Bengaluru</span>
    </div>

    <div className="flex items-center">
      <button className="border border-orange-400 rounded-2xl px-3 py-1 text-orange-400">Learn more</button>
    </div>
        </div>
  </div>
  
</div>


<div className="flex justify-center mt-9">
        <div className="flex w-full max-w-[80%]">
  <div className="flex justify-evenly bg-white w-full rounded-xl py-4">
    <div>
      <Image src={acadamic1} alt="Education 1" />
    </div>

    <div className="text-black flex flex-col items-center justify-center">
      <div className="flex items-center">
        <span className="text-orange-400">Masters</span>
        <span className="text-sm pl-2 text-slate-500">2024-2026</span>
      </div>
      <span className="font-semibold text-xl mt-1 ">MBA in Technology Management</span>
      <span className="font-thin text-slate-500">TA Pai Management Institute, Bengaluru</span>
    </div>

    <div className="flex items-center">
      <button className="border border-orange-400 rounded-2xl px-3 py-1 text-orange-400">Learn more</button>
    </div>
        </div>
  </div>
  
</div>

      </section>
    );
  }
  
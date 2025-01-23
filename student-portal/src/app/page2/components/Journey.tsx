import Image from "next/image";
import componyIcon from '../../../../public/images/journey-icon.jpg'


export default function Journey() {
    return (
<section className="mt-11 bg-gray-50 py-7">
  <div className="flex justify-between mx-40">
    <div>
      <h3 className="text-4xl font-bold text-slate-700 w-[27rem]">Professional Journey & Internship Roles</h3>
    </div>
    <div className="flex text-slate-800 rounded-2xl border border-slate-300 py-1 h-10">
      <button className="px-2 bg-slate-300 rounded-xl ml-1">Work Experience</button>
      <button className="px-2">Internships</button>
    </div>
  </div>

  <div className="mx-8 mt-8 justify-center flex"> 
  <div className="bg-white rounded-2xl shadow-[0_40px_20px_-40px_rgba(0,0,0,0.2),0_30px_30px_-10px_rgba(0,0,0,0.1)] p-8 w-full max-w-6xl min-h-[27rem]">
  <div className="flex justify-between items-center mx-16">
      <div className="max-w-xs">
        <p className="text-orange-500"><span>3 Mons</span> | <span className="text-gray-500">Feb 2024 - April 2024</span></p>
        <h4 className="text-xl font-semibold mt-2 text-slate-800">Software Developer</h4>
        <p className="text-gray-600 mt-4 max-w-xl">Acquired the practical skills to develop the website using React-Js for investors to get attracted for a Electric Battery Storage systems of Japanese Firm Pogli Enterprises</p>
        <button className="text-orange-500 mt-4">View Project</button>
      </div>
      <div className="flex flex-col items-center text-slate-800">
        <Image src={componyIcon} alt="Company Logo" className="w-80 h-60" />
        <p className="text-center mt-2">Yogi Technologies LLP,<br/>Chandigarh</p>
        <button className="mt-4 border border-orange-500 text-orange-500 px-4 py-1 rounded-full">Experience Letter</button>
      </div>
    </div>
  </div>
</div>


</section>
    )
}
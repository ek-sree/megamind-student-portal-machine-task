import { Download, Mail, Phone } from 'lucide-react';
import bgImg from '../../../../public/images/profile-bg.png';
import githubIcon from '../../../../public/images/github-icon.png';
import linkdIn from '../../../../public/images/linkeidn.png';
import Image from 'next/image';

const ConnectMe = () => {
  return (
    <section className="bg-gray-200">

      <div
        className="relative p-6 text-center max-w-7xl w-full mx-auto flex justify-center items-center rounded-lg py-20 mt-10"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <p className="text-3xl font-semibold">Connect with Saksham Arora</p>
          <div className="flex justify-center">
            <button className="bg-white text-orange-500 px-4 py-2 mt-2 rounded-2xl flex gap-3 items-center justify-center">
              <Download /> Download Resume
            </button>
          </div>
        </div>
      </div>

      <div className="text-md text-black flex justify-between mx-14 mt-2 py-5">

        <div className="px-28 flex gap-10">
          <div className="flex items-center gap-2 text-slate-500 cursor-pointer">
            <Mail className="text-lg" />
            <span className="text-lg">Email</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 cursor-pointer">
            <Phone className="text-lg" />
            <span className="text-lg">Phone</span>
          </div>
        </div>

        <div className="px-28 flex gap-6 text-slate-500">
          <div className="border border-slate-400 py-1 px-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <Image src={githubIcon} alt="GitHub Icon" width={20} height={20} />
            <span>GitHub</span>
          </div>

          <div className="border border-slate-400 py-1 px-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <Image src={linkdIn} alt="LinkedIn Icon" width={20} height={20} />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
        <div className='flex justify-center'>

      <hr className=" w-4/5 border-1 border-gray-300" />
        </div>
    </section>
  );
};

export default ConnectMe;

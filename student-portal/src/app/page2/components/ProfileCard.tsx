// Import React and other necessary components
import React, {  } from 'react';
import Image from 'next/image';
import {  Download, Mail, Phone } from 'lucide-react';
import bgImg from '../../../../public/images/profile-bg.png';
import picImg from '../../../../public/images/profile-pic-bg.png';
import watchVideo from '../../../../public/images/watch-video.png';
import BackButton from '../common/BackButton';


async function fetchUserData(id: string) {
  const res = await fetch(`http://localhost:5000/api/users/${id}`);
  if (res.status==200) {
    return await res.json();
  }
  throw new Error('Failed to fetch user data');
}

  


const ProfileCard = async ({ id }: { id: string }) => {
  console.log("PARAMSSSS ID",id);
  
  const user = await fetchUserData(id);  
  console.log(user);
  
  if (!user) {
    return <p className="text-center mt-10 text-red-500">User not found.</p>;
  }

  return (
    <section
      className="relative p-6 text-center max-h-60"
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <BackButton/>
      <div className="relative flex justify-center items-center mt-16">
        <Image
          src={picImg}
          alt="avatar-bg-ring"
          className="w-[270px] h-[150px]"
        />
        <Image
          src={`/images/${user.data.avatar.split('/').pop()}`}
          alt="Profile Picture"
          className="absolute w-56 h-52 top-5 rounded-full"
          width={224}  
          height={224} 
        />
      </div>

      <div className="text-black mt-20">
        <h2 className="text-xl font-bold mt-4">{user.data.name}</h2>
        <p className="text-gray-800">{`${user.data.gender} | ${user.data.age} | ${user.data.bio}`}</p>
        <div className="flex items-center justify-center mt-3">
          <Image src={watchVideo} alt="watch-video" />
        </div>
        <div className="flex justify-center">
          <div className="text-sm font-semibold text-slate-500 pl-2 space-x-3 border border-slate-400 py-5 px-4 mt-4 rounded-xl max-w-7xl flex justify-center items-center">
            <span>Core skills and technical Proficiencies</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-8 max-w-7xl">
            <p className="text-slate-600">{user.data.description}</p>
          </div>
        </div>
      </div>

      <div className="px-28 flex gap-10 absolute bottom-5">
        <div className="flex items-center gap-2 text-white cursor-pointer">
          <Mail className="text-sm" />
          <span className="text-sm">Email</span>
        </div>

        <div className="flex items-center gap-2 text-white cursor-pointer">
          <Phone className="text-sm" />
          <span className="text-sm">Phone</span>
        </div>
      </div>

      <div className="px-28 flex gap-10 absolute bottom-5 right-14">
        <div className="flex items-center gap-2 justify-center text-white cursor-pointer border border-white py-1 px-2 rounded-2xl font-bold">
          <Download className="text-sm" />
          <span className="text-sm">Download My Resume</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;

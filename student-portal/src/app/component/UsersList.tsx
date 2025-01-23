'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import avatar from '../../../public/images/9286c820b0386e71f0ad7fec5f59c7c4.jpg'
import avatar2 from '../../../public/images/5ba24e7f672e1629c968d371.webp'
import avatar3 from '../../../public/images/memoji-vision-pro.webp'
import avatar4 from '../../../public/images/handsome-happy-guy-white-background-emoji-memoji_826801-7032.webp'

const users = [
  {
    id: 1,
    name: 'John Doe',
    avatar: avatar,
    bio: 'he/him',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: avatar2,
    bio: 'she/her',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    avatar: avatar3,
    bio: 'he/him',
  },
  {
    id: 4,
    name: 'Prithvu Raj',
    avatar: avatar4,
    bio: 'A Devops',
  },
];

const UsersList = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
            onClick={() => router.push(`/page2/${user.id}`)} 
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold text-center mt-4 text-black">{user.name}</h2>
            <p className="text-gray-600 text-center mt-2">{user.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;

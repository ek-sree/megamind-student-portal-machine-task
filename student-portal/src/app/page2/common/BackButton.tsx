'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  return (
    <div 
      className="absolute top-4 left-4 cursor-pointer hover:bg-white/20 p-2 rounded-full transition-all"
      onClick={() => router.back()}
    >
      <ArrowLeft className="text-white w-6 h-6" />
    </div>
  );
}
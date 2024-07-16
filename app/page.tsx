"use client"
import HeroSection from "@/components/HeroSection";
import { useAuth, UserButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isSignedIn } = useAuth();
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#E0EFFC] via-[#F7F5FA] to-[#F0E8F6]">
    <div className="flex items-center justify-between px-7 md:px-12 py-4 shadow">
      
      <Link href="/" className='cursor-pointer flex gap-2 items-center justify-center'>
            <Image src={'/logo.png'} alt='logo' width={50} height={50} />
              <p className='font-bold text-lg'>Content Crafter</p>
            </Link>
            {!isSignedIn ? <Link href="/sign-up" className="flex items-center gap-2 hover:text-blue-700 cursor-pointer"><LogIn />Sign up</Link>: 
            <div className="flex items-center gap-3">
              <Link href='/dashboard' className="px-5 py-2 bg-slate-50 rounded-3xl text-black 
               shadow-md active:shadow-none">Dashboard</Link>
              <UserButton />
            </div>}
     </div>
     <HeroSection />
    </main>
  );
}

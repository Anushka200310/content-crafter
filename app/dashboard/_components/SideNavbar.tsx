"use client"

import { FileClock, HomeIcon, Settings, Wallet } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import UsageTrack from './UsageTrack';
import Image from 'next/image';

const SideNavbar = () => {

    const menuList = [{
        id: 1,
        name: "Home",
        icon: HomeIcon,
        path: "/dashboard"
    },
    {
        id: 2,
        name: "History",
        icon: FileClock,
        path: "/dashboard/history"
    },
    {
        id: 3,
        name: "Billing",
        icon: Wallet,
        path: "/dashboard/billing"
    },
    {
        id: 4,
        name: "Settings",
        icon:  Settings,
        path: "/dashboard/settings"

    }]

    const pathname = usePathname();

  return (
    <div className='relative h-screen p-5 shadow-md border'>
    
            <Link href="/" className='cursor-pointer flex gap-2 items-center justify-center'>
              <Image src={'/logo.png'} alt='logo' width={50} height={50} />
              <p className='font-bold text-lg'>Content Crafter</p>
            </Link>
           
        <hr className='mt-5 border' />
        <div className="p-2 mt-5">
            {menuList.map((menu, index)=>(
                <Link key={index} href={menu.path} className={`flex items-center gap-3 p-5 mb-3 text-gray-600 transition-colors 
                    cursor-pointer hover:bg-primary hover:text-white rounded-lg
                    ${pathname == menu.path && "bg-primary text-white"}`}>
                    <menu.icon />
                    {menu.name}
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            <UsageTrack />
        </div>
    </div>
  )
}

export default SideNavbar;
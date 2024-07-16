"use client"
import { Button } from '@/components/ui/button';
import { ArrowLeft, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const Header = () => {
  const router = useRouter();

  return (
    <div className='p-5 shadow-sm border-2 flex items-center justify-between'>
        <div className='flex items-center gap-2 p-2 max-w-sm md:max-w-lg'>
           <Button variant='ghost' className='flex items-center gap-2' onClick={()=>router.back()}><ArrowLeft />Back</Button>
        </div>
        <div className='flex items-center gap-4'>

          <div className='block md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon /></DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href='/dashboard'>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href='/dashboard/history'>
                  History
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href='/dashboard/billing'>
                 Billing
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Link href='/dashboard/settings'>
                 Settings
               </Link>
            </DropdownMenuItem>
             </DropdownMenuContent>
          </DropdownMenu>
       </div>

       <div className='hidden md:block'>
       <Link href='/dashboard/billing' className='hidden md:block'>
            <Button variant='secondary'>Upgrade✨</Button>
          </Link>
       </div>
        
        </div>
    </div>
  )
}

export default Header;

{/* <Link href='/dashboard/history'>
                  <Button variant='ghost'>History</Button>
               </Link>
            
              <Link href='/dashboard/billing'>
                  <Button variant='ghost'>Billing</Button>
               </Link>

               <Link href='/dashboard/settings'>
                  <Button variant='ghost'>Settings</Button>
               </Link>

                <Link href='/dashboard/billing' className='hidden md:block'>
            <Button variant='secondary'>Upgrade✨</Button>
          </Link>
               
               */}
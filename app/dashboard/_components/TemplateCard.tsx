import React from 'react'
import { TEMPLATE } from './TemplateList';
import Image from 'next/image';
import Link from 'next/link';

const TemplateCard = (item:TEMPLATE) => {
  return (
    // <Link href={'/dashboard/content/'+item?.slug}>
    <Link href={'/dashboard/content/'+item?.slug} className='p-5 shadow-md rounded border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
       <Image src={item.icon} alt='icon' width={50} height={50} /> 
     <h2 className='font-medium text-lg line-clamp-4'>{item.name}</h2>
     <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
    </Link>
    // {/* </Link> */}
  )
}

export default TemplateCard;
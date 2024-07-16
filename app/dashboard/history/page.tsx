import { db } from '@/utils/db';
import { AiOutput } from '@/utils/schema';
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import React from 'react'
import { TEMPLATE } from '../_components/TemplateList';
import templates from '@/app/(data)/templates';
import CopyButton from './_components/CopyButton';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdBy:string,
    createdAt:string
}

const Historypage = async() => {
    const user = await currentUser();
     {/* @ts-ignore */}
    const history:HISTORY[] = await db.select().from(AiOutput).where(eq(AiOutput?.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AiOutput.id))

    const GetTemplateName=(slug:string)=>{

        const template:TEMPLATE|any = templates?.find((item)=>item.slug==slug)
        return template;
    }
  return (
    <div className='m-5 p-5 border rounded-lg overflow-x-auto'>
         <h2 className='font-bold text-3xl mb-4'>History</h2>
        {/* <p className='text-gray-500 my-4'>Search your previously generate AI content</p> */}

     <Table>
        <TableCaption>A list of your recent activities.</TableCaption>
        <TableHeader>

         {!history ? 
            <div className='flex items-center justify-center'>
                <h2 className='text-gray-500 text-3xl'>No history found</h2>
            </div>: 

      <TableRow>
         <TableHead>Tools</TableHead>
         <TableHead>AI Content</TableHead>
         <TableHead>Date</TableHead>
         <TableHead>Words</TableHead>
         <TableHead>Copy</TableHead>
      </TableRow>}
      </TableHeader>
      <TableBody>
    {history.map((item:HISTORY,index:number)=>(
    <TableRow key={index}>
      <TableCell className='flex gap-2 items-center'>
      <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='icon' />
      {GetTemplateName(item.templateSlug)?.name}
      </TableCell>
      <TableCell>{item?.aiResponse}</TableCell>
      <TableCell>{item.createdAt}</TableCell>
      <TableCell>{item?.aiResponse.length}</TableCell>
      <TableCell>
        <CopyButton aiResponse={item.aiResponse} />
      </TableCell>
    </TableRow>
    ))}
    </TableBody>
   </Table>
  </div>
  )
}

export default Historypage;
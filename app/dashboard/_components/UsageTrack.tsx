

import React, { useContext, useEffect } from 'react'
import { Progress } from "@/components/ui/progress"
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { desc, eq } from 'drizzle-orm'
import { HISTORY } from '../history/page'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UpdateUsageContext } from '@/app/(context)/UpdateUsageContext'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const creditLimit = 10000;


const UsageTrack = () => {

  const {user} = useUser();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
  const {updateUsage, setUpdateUsage} = useContext(UpdateUsageContext);

  useEffect(() => {
    user&&getData()
  }, [user])

  useEffect(() => {
    user&&getData()
  }, [updateUsage&&user])
  

  const getData =async()=>{
       {/* @ts-ignore */}
    const result:HISTORY[] = await db.select().from(AiOutput).where(eq(AiOutput?.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AiOutput.id))
    getTotalUsage(result)
  }
  

  const getTotalUsage = (result:HISTORY[])=>{
    let total:number = 0
    result.forEach(element => {
        total = total+Number(element.aiResponse?.length)
    });
    setTotalUsage(total)
    console.log(total);

  }
  return (
    <div className='mx-5'>
        <div className='bg-primary text-white rounded-lg p-3'>
          {/*  <Progress value={(totalUsage/creditLimit)*10} />
           <h2 className='text-sm mt-1'>{totalUsage}/{creditLimit} credits used</h2> */}

           {totalUsage >= creditLimit ? (
            <div className='flex flex-col items-center justify-center'>
              <h2 className='font-medium mb-3'>No Credits</h2>
             <Link href="/dashboard/billing" className="text-slate-50">Upgrade🪙</Link>
            </div>
          
        ) : (
          <>
            <h2 className='font-medium mb-3'>Credits</h2>
            <Progress value={(totalUsage / creditLimit) * 100} />
            <h2 className="text-sm mt-1">
              {totalUsage}/{creditLimit} credits used
            </h2>
          </>
        )}
        </div>
    </div>
  )
}

export default UsageTrack;
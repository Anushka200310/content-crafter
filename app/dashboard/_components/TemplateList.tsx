"use client"

import templates from '@/app/(data)/templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
   name: string,
   desc: string,
   icon: string,
   category: string,
   slug: string,
   aiPrompt: string,
   form?: FORM[]
}

export interface FORM{
    label: string,
    field: string,
    name: string,
    required?: boolean
}

const TemplateList = ({userSearchInput}:any) => {
  const [templateList, setTemplateList] = useState(templates)
  useEffect(() => {
    //console.log(userSearchInput)
    if(userSearchInput){
      const filterData=templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      setTemplateList(filterData);
    }else{
      setTemplateList(templates)
    }
  
  }, [userSearchInput])
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
       {templateList.map((item:TEMPLATE, index:number)=>(
        <TemplateCard key={index} {...item} />
       ))}
    </div>
  )
}

export default TemplateList;
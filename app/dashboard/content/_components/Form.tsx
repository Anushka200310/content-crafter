"use client"

import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateList";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";


interface PROPS{
  selectedTemplate?:TEMPLATE
  userFormInput:any
  loading:boolean
}

const Form = ({selectedTemplate, userFormInput, loading}:PROPS) => {
  const [formData, setFormData] = useState<any>()

  const handleChange = (e:any)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})

  }

  const submit = (e:any)=>{
    e.preventDefault();
    console.log(formData)
    userFormInput(formData)

  }

  return (
    <div className="p-5 rounded-lg shadow-md border">
      {/*@ts-ignore*/}
      <Image src={selectedTemplate?.icon} alt='icon' height={50} width={50} />
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2> 
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={submit}>
        {selectedTemplate?.form?.map((item, index)=>(
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field=='input' ? <Input name={item.name} required={item?.required} onChange={handleChange} /> : item.field=='textarea'? <Textarea name={item.name} required={item?.required} onChange={handleChange} /> : null}
          </div>
        ))}
        <Button type='submit' disabled={loading} className="w-full py-6">
          {loading&&<Loader2Icon className="animate-spin ml-2" />}
          Generate Content
        </Button>
      </form>
    </div>
  )
}

export default Form;
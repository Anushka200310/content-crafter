"use client"

import templates from "@/app/(data)/templates";
import { TEMPLATE } from "../../_components/TemplateList";
import Form from "../_components/Form";
import Output from "../_components/Output";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import { useContext, useState } from "react";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import moment from "moment";
import { useRouter } from "next/navigation";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateUsageContext } from "@/app/(context)/UpdateUsageContext";
import { useUser } from "@clerk/nextjs";


interface PROPS{
    params: {
        'template-slug':string
    }
}

  const content = (props:PROPS) => {

    const selectedTemplate:TEMPLATE|undefined=templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading, setLoading] = useState(false)
    const [aiContent, setAiContent] = useState<string>('')
    const {user} = useUser();
    const router = useRouter();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {updateUsage, setUpdateUsage} = useContext(UpdateUsageContext);

    const generateContent = async(formData:any)=>{
      if(totalUsage>=10000){
        console.log("please upgrade")
        router.push("/dashboard/billing")
        return ;
      }
      setLoading(true)
      const AiPrompt = selectedTemplate?.aiPrompt; 
      const finalAiPrompt = JSON.stringify(formData)+", "+AiPrompt;
      const result = await chatSession.sendMessage(finalAiPrompt);
      console.log(result.response.text());
      setAiContent(result?.response.text());
      await storeInDb(formData, selectedTemplate?.slug, result?.response.text())
      setLoading(false)
      setUpdateUsage(Date.now())
    }

    const storeInDb=async(formData:any, slug:any, aiResp:string)=>{
      const userEmail = user?.primaryEmailAddress?.emailAddress;

      if (!userEmail) {
        throw new Error("User email is required");
      }
      const result = await db.insert(AiOutput).values({
        formData:formData,
        templateSlug:slug,
        aiResponse:aiResp,
        createdBy:userEmail,
        createdAt:moment().format('DD/MM/yyyy'),

      });
      console.log(result);
    }
    return (
      <div className="p-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          <Form selectedTemplate={selectedTemplate} userFormInput={(v:any)=>generateContent(v)} loading={loading} />
          <div className="col-span-2">
            <Output aiContent={aiContent} />
         </div> 
      </div>
      </div>
     
    )
  }
  
  export default content;
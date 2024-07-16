"use client"

import { useState } from "react";

import Header from "./_components/Header";
import SideNavbar from "./_components/SideNavbar";
import { UpdateUsageContext } from "../(context)/UpdateUsageContext";
import { TotalUsageContext } from "../(context)/TotalUsageContext";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage, setTotalUsage] = useState<Number>(0)
    const [updateUsage, setUpdateUsage] = useState<any>()
    return (
      <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
        <UpdateUsageContext.Provider value={{updateUsage, setUpdateUsage}}>
        <div>
            <div className="hidden md:w-64 md:block fixed">
                <SideNavbar />
            </div>
            <div className="md:ml-64">
                <Header />
                {children}
            </div>   
        </div>
        </UpdateUsageContext.Provider>
      </TotalUsageContext.Provider>
 
    );
  }
  
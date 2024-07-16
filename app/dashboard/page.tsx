"use client"

import { useState } from "react";
import SearchBar from "./_components/SearchBar";
import TemplateList from "./_components/TemplateList";

const dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("")
  return (
    <div>
      <SearchBar onSearchInput={(value:string)=>setUserSearchInput(value)} />
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  )
}

export default dashboard;
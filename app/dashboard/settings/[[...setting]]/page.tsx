import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const settingPage = () => {
  return (
    <div className='flex items-center justify-center py-4 h-full overflow-x-auto'>
        <UserProfile />
    </div>
  )
}

export default settingPage;
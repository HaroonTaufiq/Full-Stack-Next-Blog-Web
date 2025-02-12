import React from 'react'

export default function Container({children} : {children: React.ReactNode}) {
  return (
    <div className='max-w-[1100px] mx-auto border-l border-r bg-white min-h-screen flex flex-col'>
      {children}
    </div>
  )
}

import React from 'react'
import { createPost } from '../actions/action'
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import Form from '../components/form'

export default async function page() {

  return (
    <main className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
     
     <Form />
      <LogoutLink className='mt-5'>Logout</LogoutLink>
    </main>
  )
}

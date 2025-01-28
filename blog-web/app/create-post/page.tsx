import React from 'react'
import { createPost } from '../actions/action'
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function page() {

  return (
    <main className='text-center pt-16'>
      <h1 className='text-4xl md:text-5xl font-bold mb-5'>Create Post</h1>
      <form action={createPost}
        className='flex flex-col max-w-[400px] mx-auto gap-2 my-10'>
        <input
          type='text'
          required
          placeholder='Title for new post'
          name='title'
          className='border rounded px-3 h-10' />
        <textarea
          className='border rounded px-3 py-2'
          required
          rows={6}
          placeholder='Content for new post'
          name='content' />
        <button className='h-10 bg-blue-500 px-5 rounded text-white'>Submit</button>
      </form>
      <LogoutLink className='mt-5'>Logout</LogoutLink>
    </main>
  )
}

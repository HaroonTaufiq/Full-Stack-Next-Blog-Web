import React from 'react'
import { createPost } from '../actions/action'

export default function Form() {
  return (
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
  )
}

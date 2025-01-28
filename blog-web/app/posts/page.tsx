import React, { Suspense } from 'react'
import PostList from '../components/posts-list'

export const page = async () => {


  return (
    <main className="pt-16 text-center px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </main>
  )
}

export default page
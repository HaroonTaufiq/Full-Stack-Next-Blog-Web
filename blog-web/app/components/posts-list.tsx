import prisma from '@/lib/db';
import Link from 'next/link'
import React from 'react'
// import UpvoteBtn from './upvote-btn';

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (

    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='mb-3'>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* <UpvoteBtn /> */}
    </div>
  )
}

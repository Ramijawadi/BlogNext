
import {posts} from '@/app/lib/placeholder-data.js'
import React from 'react'

const page = () => {
  return (
    <>
    <h2>Posts  </h2>
{
  posts.map((post) => {
        return <div key={post.id}>{post.title}</div>
    })

}    </>
  )
}

export default page
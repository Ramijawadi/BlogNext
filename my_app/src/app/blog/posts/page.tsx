
import {posts} from '@/app/lib/placeholder-data.js'
import Post from '@/app/ui/components/posts/page'
import React from 'react'

const page = () => {
  return (
    <>
    <h2>Posts  </h2>
{
  posts.map((post) => {
        return <div >
<Post   key={post.id}   {...post} />
      

        </div>
    })

}    </>
  )
}

export default page
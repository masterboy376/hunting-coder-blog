import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = (props) => {

  const [loading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState(props.parsedData)

  return (
    <>
      {
        loading ?
          <>
          <div className="h-screen w-screen flex items-center justify-center">
            <span className="text-2xl font-bold">Loading...😅</span>
          </div>
          </>
          :
          <>
            <div className='h-screen w-full flex justify-center items-center '>
              <div className=''>
                <h2 className='text-2xl font-bold'>Popular blogs</h2>
                {blogs.map((blogItem) => {
                  return <div key={blogItem.slug}>
                    <Link href={`/blogpost/${blogItem.slug}`}>
                      <div className="my-10 cursor-pointer">
                        <h4 className='text-xl font-semibold'>{blogItem.title}</h4>
                        <p>{blogItem.content.slice(0, 60)}...</p>
                      </div>
                    </Link>
                  </div>
                })}
              </div>
            </div>
          </>
      }
    </>
  )
}
 
 export async function getServerSideProps(context){
  let rawData = await fetch('http://localhost:3000/api/blogs')
  let parsedData = await rawData.json()
  return{
    props: {parsedData}
  }
}

export default Blog
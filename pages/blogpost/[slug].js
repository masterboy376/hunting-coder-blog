import React, { useEffect, useState } from 'react'

const slug = (props) => {
  const [blog, setBlog] = useState(props.parsedData)

  return (
    <div className='w-3/4 mx-auto min-h-screen flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold">{blog && blog.title}</h1>
      <p>{blog && blog.content}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query
  let rawData = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let parsedData = await rawData.json()
  return {
    props: { parsedData }
  }
}

export default slug
import React, { useState } from 'react'
import * as fs from 'fs';

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }

  const [blog, setBlog] = useState(props.parsedData)

  return (
    <div className='w-3/4 mx-auto min-h-screen flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold">{blog && blog.title}</h1>
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)} />}
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const {slug} = context.query
//   let rawData = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let parsedData = await rawData.json()
//   return {
//     props: { parsedData }
//   }
// }

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`)
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  console.log(allb)
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;


  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

  return {
    props: { parsedData: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

export default Slug